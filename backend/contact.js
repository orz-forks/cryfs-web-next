"use strict";

import sendgrid_ from '@sendgrid/mail'
import secret from './secret'
import CachedValue from './cached_value'
import {LambdaFunction} from './lambda_function'

const sendgrid = new CachedValue(async () => {
    const key = await secret('SENDGRID_API_KEY')
    sendgrid_.setApiKey(key)
    return sendgrid_
})

const do_send = async (from_email, message) => {
    let msg = {
        to: 'messmer@cryfs.org',
        from: {
            email: 'messmer@cryfs.org',
            name: "CryFS Contact Form",
        },
        subject: `CryFS Contact Form (from ${from_email})`,
        text: message,
    }
    if (typeof from_email != 'undefined' && from_email !== '') {
        msg['reply_to'] = from_email
    }
    const sg = await sendgrid.get()
    await sg.send(msg)
    console.log(`Sent contact email from ${from_email}: ${message}`)
}

export const send = LambdaFunction(async (body) => {
    await do_send(body['email'], body['message'])

    return {
        statusCode: 200,
        body: JSON.stringify({
            'success': true,
        }),
    }
})
