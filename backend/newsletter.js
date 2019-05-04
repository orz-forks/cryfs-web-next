"use strict";

import Mailchimp from 'mailchimp-api-v3'
import secret from './secret'
import CachedValue from './cached_value'
import {LambdaFunction} from './lambda_function'

const mailchimp = new CachedValue(async () => {
    const list_id = await secret('MAILCHIMP_LIST_ID')
    const api_token = await secret('MAILCHIMP_API_TOKEN')
    return {
        list_id: list_id,
        api: new Mailchimp(api_token),
    }
})

const do_register = async (email) => {
    const mc = await mailchimp.get()
    try {
        await mc.api.post({
            path: `/lists/${mc.list_id}/members`,
            body: {
                email_address: email,
                status: 'subscribed',
            },
        })
        console.log(`Registered ${email} with newsletter`)
    } catch (err) {
        // ignore error due to "member already exists" but rethrow other errors
        if (err['title'] !== 'Member Exists') {
            console.log(JSON.stringify(err))
            throw(err)
        } else {
            console.log(`Didn't register ${email} because it is already registered`)
        }
    }
}

export const register = LambdaFunction(async (body) => {
    await do_register(body['email'])

    return {
        statusCode: 200,
        body: JSON.stringify({
            'success': true,
        }),
    }
})
