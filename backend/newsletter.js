import Mailchimp from 'mailchimp-api-v3'

const list_id = process.env.MAILCHIMP_LIST_ID
const api_token = process.env.MAILCHIMP_API_TOKEN
const mailchimp = new Mailchimp(api_token)

const do_register = async (email) => {
    try {
        await mailchimp.post({
            path: `/lists/${list_id}/members`,
            body: {
                email_address: email,
                status: 'subscribed',
            },
        })
        console.log(`Registered ${email} with newsletter`)
    } catch (err) {
        // ignore error due to "member already exists" but rethrow other errors
        if (err['title'] != 'Member Exists') {
            console.log(JSON.stringify(err))
            throw(err)
        } else {
            console.log(`Didn't register ${email} because it is already registered`)
        }
    }
}

export const register = async (event, context) => {
    await do_register(event['queryStringParameters']['email'])

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        },
        body: JSON.stringify({
            'success': true,
        }),
    }
}
