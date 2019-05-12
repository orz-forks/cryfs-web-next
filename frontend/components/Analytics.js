"use strict";

import React from 'react'

const google_analytics_id = "UA-65863982-1"

export const FacebookAppId = "464697373705005"

export const GoogleAnalyticsSetup = () => (
	<>
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}></script>
		<script dangerouslySetInnerHTML={{ __html: `
		  window.dataLayer = window.dataLayer || [];
		  window.gtag = function(){dataLayer.push(arguments);}
		  window.gtag('js', new Date());
		  window.gtag('config', '${google_analytics_id}');
		` }} />
	</>
)

export const sendGoogleAnalyticsEvent = (category, action) => {
	window.gtag('event', action, {
		'event_category': category,
	})
}
