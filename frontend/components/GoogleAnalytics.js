"use strict";

import React from 'react'
import Head from 'next/head'
import { RoutingListener } from './RoutingListener'
import {withRouter} from "next/dist/client/router";

const google_analytics_id = "UA-65863982-1"
const google_analytics_init = (
	`window.dataLayer = window.dataLayer || [];` +
	`window.gtag = function(){dataLayer.push(arguments);};` +
	`window.gtag('js', new Date());` +
	`window.gtag('config', '${google_analytics_id}');`
)

export const sendGoogleAnalyticsEvent = (category, action) => {
	window.gtag('event', action, {
		'event_category': category,
	})
}

class GoogleAnalyticsSetup_ extends React.Component {
	constructor(props) {
		super(props)

		this.routingListener = new RoutingListener(props.router.asPath)
		this.routingListener.addListener(this.onRouteChangeComplete)
	}

	onRouteChangeComplete = (url) => {
		// Log page view
		console.log("Log page view " + url)
		window.gtag('config', '${google_analytics_id}', {
			'page_path': url,
		})
		window.gtag('event', 'page_view')
	}

	render = () => (
		<Head>
			<script dangerouslySetInnerHTML={{
				__html: google_analytics_init
			}}/>
			<script async defer src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}/>
		</Head>
	)
}

export const GoogleAnalyticsSetup = withRouter(GoogleAnalyticsSetup_)
