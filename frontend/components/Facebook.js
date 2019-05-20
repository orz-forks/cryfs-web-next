"use strict";

import ReactDOM from 'react-dom'
import defer from './Defer'
import { promiseWithTimeout } from './Timeout'
import { sendGoogleAnalyticsEvent } from './GoogleAnalytics'

export const FacebookAppId = "464697373705005"

const debug = false

// TODO Facebook Event logging

const api = defer()
export const FacebookAPI = async () => {
    return await promiseWithTimeout(api.promise, 10000)
}

const setupAnalyticsTracking = (fb) => {
    fb.Event.subscribe('edge.create', () => {
        sendGoogleAnalyticsEvent('fb', 'like')
    })
    fb.Event.subscribe('edge.remove', () => {
        sendGoogleAnalyticsEvent('fb', 'unlike')
    })
}

const loadFacebookSdk = () => {
    const scriptTagId = 'facebook-jssdk'

    const isAlreadyLoaded = () => {
        const hasAsyncInitCode = typeof window.fbAsyncInit !== 'undefined'
        const hasScriptTag = !!document.getElementById(scriptTagId)
        console.assert(hasAsyncInitCode == hasScriptTag, `hasAsyncInitCode=${hasAsyncInitCode} but hasScriptTag=${hasScriptTag}`)
        return hasScriptTag
    }

    const initSdk = () => {
        window.fbAsyncInit = () => {
            FB.init({
                appId            : FacebookAppId,
                xfbml            : false,
                autoLogAppEvents : true,
                version          : 'v2.10', // From 2.11 on, the edge.create and edge.remove events we use for analytics don't work anymore, see https://developers.facebook.com/blog/post/2017/11/07/changes-developer-offerings/
            })
            api.resolve(FB)
            setupAnalyticsTracking(FB)
        }
    }

    const addSdkScriptTag = () => {
        const sdkUrl = debug ? "https://connect.facebook.net/en_US/sdk/debug.js" : "https://connect.facebook.net/en_US/sdk.js"
        const firstScriptTagInPage = document.getElementsByTagName("script")[0]
        const newScriptTag = document.createElement("script")
        newScriptTag.id = scriptTagId
        newScriptTag.src = sdkUrl
        newScriptTag.async = true
        newScriptTag.defer = true
        firstScriptTagInPage.parentNode.insertBefore(newScriptTag, firstScriptTagInPage)
    }

    if (isAlreadyLoaded()) {
        // Facebook is already set up
        return;
    }

    initSdk()
    addSdkScriptTag()
}

export class FacebookRoot extends React.Component {
    componentDidMount = () => {
        loadFacebookSdk()
    }

    render = () => (
        <div id="fb-root"/>
    )
}

export class FacebookLikeButton extends React.Component {
    componentDidMount = async () => {
        const api = await FacebookAPI()
        api.XFBML.parse(ReactDOM.findDOMNode(this))
    }

    render = () => (
        <div>
            <div id="fb-like" className="fb-like" {...this.props} />
        </div>
    )
}
