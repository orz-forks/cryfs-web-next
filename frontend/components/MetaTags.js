"use strict";

import Head from "next/head"
import Logo from "../assets/images/logo.png"

export default (props) => (
    <Head>
        <meta property="og:title" content={props.title} />
        <meta property="og:url" content={props.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Logo} />
        <meta property="og:description" content={props.description} />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
    </Head>
)
