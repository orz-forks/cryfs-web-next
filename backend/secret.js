"use strict";

import AWS from 'aws-sdk'
import CachedValue from './cached_value'
import util from 'util'

const ssm = new AWS.SSM()
ssm.getParametersAsync = util.promisify(ssm.getParameters)

const keys = [
    'MAILCHIMP_API_TOKEN',
    'MAILCHIMP_LIST_ID',
    'SENDGRID_API_KEY',
]

const load_values = async () => {
    const validate = (keys, params) => {
        let missing = keys.filter(k => params[k] === undefined);
        if (missing.length > 0) {
            throw new Error(`missing keys: ${missing}`)
        }
    }

    const req = {
        Names: keys,
        WithDecryption: true
    }
    const resp = await ssm.getParametersAsync(req)

    let params = {}
    for (let p of resp.Parameters) {
        params[p.Name] = p.Value
    }

    validate(keys, params)
    return params
}

const secrets = new CachedValue(load_values)

export default async (key) => {
    const secret_values = await secrets.get()
    return secret_values[key]
}
