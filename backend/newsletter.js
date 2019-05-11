"use strict";

import Mailchimp from 'mailchimp-api-v3'
import {email_myself} from './email'
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

const response_success = {
    statusCode: 200,
    body: JSON.stringify({
        'success': true,
    }),
}

const response_error_invalid_email = {
    statusCode: 400,
    body: JSON.stringify({
        'success': false,
        'error': 'invalid-email',
    }),
}

const response_error_unsubscribed = {
    statusCode: 400,
    body: JSON.stringify({
        'success': false,
        'error': 'unsubscribed',
    }),
}

const response_error_unknown = {
    statusCode: 500,
    body: JSON.stringify({
        'success': false,
    }),
}

const do_register = async (email) => {
    const mc = await mailchimp.get()
    try {
        await mc.api.post({
            path: `/lists/${mc.list_id}/members`,
            body: {
                email_address: email,
                status: 'pending', // Pending means mailchimp sends a confirmation email
            },
        })
    } catch (err) {
        if (err['title'] === 'Member Exists') {
            console.log(`Didn't register ${email} because it is already registered`)
            await email_myself("CryFS Newsletter Registration", "New interested user (not adding - already exists)", `Didn't register ${email} with newsletter because it already exists`)
            // returning success so attackers can't see if an email address is already on the newsletter or not.
            return response_success
        } else if (err['title'] === 'Invalid Resource') {
            console.log(`Didn't register ${email} because it is an invalid email address`)
            await email_myself("CryFS Newsletter Registration", "New interested user (not adding - invalid email)", `Didn't register ${email} with newsletter because it is an invalid email address`)
            return response_error_invalid_email
        } else if (err['title'] === 'Forgotten Email Not Subscribed') {
            console.log(`Didn't register ${email} because it was previously unsubscribed`)
            await email_myself("CryFS Newsletter Registration", "New interested user (not adding - previously unsubscribed)", `Didn't register ${email} with newsletter because it was previously unsubscribed`)
            return response_error_unsubscribed
        } else {
            console.log(`Didn't register ${email} with newsletter because of an error: ${JSON.stringify(err)}`)
            await email_myself("CryFS Newsletter Registration", "Error registering user", `Didn't register ${email} with newsletter because of an error: ${JSON.stringify(err)}`)
            return response_error_unknown
        }
    }

    await email_myself("CryFS Newsletter Registration", "New interested user", `Registered ${email} with newsletter`)
    console.log(`Registered ${email} with newsletter`)

    return response_success
}

export const register = LambdaFunction(async (body) => {
    return await do_register(body['email'])
})
