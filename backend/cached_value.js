"use strict";

import {Mutex} from 'async-mutex'

class CachedValue {
    constructor(creator) {
        this.mutex = new Mutex()
        this.creator = creator
    }

    get = async () => {
        await this.mutex.runExclusive(async () => {
            if (typeof this.value == "undefined") {
                this.value = await this.creator()
            }
            return this.value
        })
    }
}

export default CachedValue
