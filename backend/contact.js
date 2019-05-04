"use strict";

import sendgrid_ from '@sendgrid/mail'
import cors_headers from './cors_headers'
import secret from './secret'
import CachedValue from './cached_value'

const sendgrid = new CachedValue(async () => {
    const key = await secret('SENDGRID_API_KEY')
    sendgrid_.setApiKey(key)
    return sendgrid_
})

const token = 'iSZ9_2a5PT-U'

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
    if (typeof from_email != 'undefined' && from_email != '') {
        msg['reply_to'] = from_email
    }
    const sg = await sendgrid.get()
    await sg.send(msg)
    console.log(`Sent contact email from ${from_email}: ${message}`)
}

export const send = async (event, context) => {
    try {
        const body = JSON.parse(event['body'])
        if (body['token'] != token) {
            // this is not for actual security but just to prevent spam from generic bots that don't know about the token
            return {
                statusCode: 400,
                headers: cors_headers,
                body: JSON.stringify({
                    'success': false,
                    'error': 'Wrong token',
                }),
            }
        }

        await do_send(body['email'], body['message'])

        return {
            statusCode: 200,
            headers: cors_headers,
            body: JSON.stringify({
                'success': true,
            }),
        }

    } catch(err) {
        console.log(`Error sending contact email from ${from_email}: ${message}. Error message: ${err}`)

        return {
            statusCode: 500,
            headers: cors_headers,
            body: JSON.stringify({
                'success': false,
            }),
        }
    }
}
