"use strict";

// A Promise that resolves after a given timeout
export const timeout = (delayMs) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delayMs)
    })
}

export const promiseWithTimeout = async (promise, waitMsUntilCancelled) => {
    let timeoutId = undefined
    const failureCase = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => reject("Timeout waiting for promise"), waitMsUntilCancelled)
    })
    const successCase = promise.finally(() => {
        clearTimeout(timeoutId)
    })

    return await Promise.race([successCase, failureCase])
}
