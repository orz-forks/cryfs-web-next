"use strict";

import { GoogleAnalyticsRoot, logGoogleAnalyticsPageview } from './GoogleAnalytics'
import { logFacebookPageview } from './Facebook'
import {RoutingListener} from "./RoutingListener";
import {withRouter} from "next/dist/client/router";

class AnalyticsSetup_ extends React.Component {
    constructor(props) {
        super(props)

        this.routingListener = new RoutingListener(props.router.asPath)
        this.routingListener.addListener(this.onRouteChangeComplete)
    }

    componentWillUnmount = () => {
        this.routingListener.finish()
    }

    onRouteChangeComplete = async (url) => {
        // Log page view
        // TODO For some reason, this logs two page views on modal close
        // TODO This logs the correct page url but the old page title because page title updates are too slow
        logGoogleAnalyticsPageview(url)
        await logFacebookPageview()
    }

    render = () => (
        <GoogleAnalyticsRoot />
    )
}

export const AnalyticsSetup = withRouter(AnalyticsSetup_)
