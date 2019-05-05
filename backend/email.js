"use strict";

import CachedValue from "./cached_value";
import secret from "./secret";
import sendgrid_ from "@sendgrid/mail";

const sendgrid = new CachedValue(async () => {
    const key = await secret('SENDGRID_API_KEY')
    sendgrid_.setApiKey(key)
    return sendgrid_
})

export const email_myself = async (from, subject, message, reply_to = undefined) => {
    let msg = {
        to: 'messmer@cryfs.org',
        from: {
            email: 'messmer@cryfs.org',
            name: from,
        },
        subject: subject,
        text: message,
    }
    if (typeof reply_to != 'undefined') {
        msg['reply_to'] = reply_to
    }
    const sg = await sendgrid.get()
    await sg.send(msg)
}
