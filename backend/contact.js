import sendgrid from '@sendgrid/mail'
import cors_headers from './cors_headers'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

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
    await sendgrid.send(msg)
    console.log(`Sent contact email from ${from_email}: ${message}`)
}

export const send = async (event, context) => {
    const params = event['queryStringParameters']
    await do_send(params['email'], params['message'])

    return {
        statusCode: 200,
        headers: cors_headers,
        body: JSON.stringify({
            'success': true,
        }),
    }
}
