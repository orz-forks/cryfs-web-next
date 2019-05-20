"use strict";

import React from 'react'
import Head from 'next/head'

// TODO Client side routing should log page views

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

export const GoogleAnalyticsSetup = () => (
	<Head>
		<script dangerouslySetInnerHTML={{
			__html: google_analytics_init
		}} />
		<script async defer src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`} />
	</Head>
)
