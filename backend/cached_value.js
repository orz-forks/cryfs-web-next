"use strict";

import {Mutex} from 'async-mutex'

class CachedValue {
    constructor(creator) {
        this.mutex = new Mutex()
        this.creator = creator
    }

    get = async () => {
        const release_mutex = await this.mutex.acquire()
        try {
            if (typeof this.value == "undefined") {
                this.value = await this.creator()
            }
            return this.value
        } finally {
            release_mutex()
        }
    }
}

export default CachedValue
