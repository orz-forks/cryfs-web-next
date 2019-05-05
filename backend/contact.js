"use strict";

import {email_myself} from './email'
import {LambdaFunction} from './lambda_function'

const do_send = async (from_email, message) => {
    await email_myself("CryFS Contact Form", `CryFS Contact Form (from ${from_email})`, message, from_email)
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
