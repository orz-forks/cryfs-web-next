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

    onRouteChangeComplete = (url) => {
        this.url = url
        for (let callback of this.onChangeCallbacks) {
            callback(this.url)
        }
    }
}
