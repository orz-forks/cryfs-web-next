"use strict";

import {Router, withRouter} from "next/dist/client/router";

export class RoutingListener {
    constructor(initialUrl) {
        this.url = initialUrl

        this.onChangeCallbacks = []

        Router.events.on('routeChangeComplete', this.onRouteChangeComplete)
        Router.events.on('hashChangeComplete', this.onRouteChangeComplete)
    }

    finish = () => {
        Router.events.off('routeChangeComplete', this.onRouteChangeComplete)
        Router.events.off('hashChangeComplete', this.onRouteChangeComplete)
    }

    addListener = (func) => {
        this.onChangeCallbacks.push(func)
    }

    onRouteChangeComplete = async (url) => {
        this.url = url

        const promises = this.onChangeCallbacks.map(async (callback) => {
            callback(this.url)
        })
        await Promise.all(promises)
    }
}
