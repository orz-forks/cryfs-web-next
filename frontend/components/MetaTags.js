"use strict";

import Head from "next/head";

export default (props) => (
    <Head>
        {/* TODO translate tags in here*/}
        <meta property="og:title" content={props.title} />
        <meta property="og:url" content={props.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={require("../assets/images/logo.png")} />
        <meta property="og:description" content={props.description} />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
    </Head>
)
