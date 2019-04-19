"use strict";

import LegalNotice from '../content/legal_notice.md'
import MarkdownPage from '../components/MarkdownPage.js'
import Head from "next/head";

const title = "CryFS: Legal Notice"
const description = "Legal Notice for CryFS. CryFS encrypts your Dropbox and protects you against hackers and data leaks. It also works well together with other cloud providers."

const OpenGraphTags = () => (
    <Head>
        {/* TODO translate tags in here*/}
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://www.cryfs.org/legal_notice" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={require("../assets/images/logo.png")} />
        <meta property="og:description" content={description} />
    </Head>
)

export default (props) => (
    <>
        <OpenGraphTags />
        <Head>
            {/* TODO translate tags in here*/}
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
        <MarkdownPage title="Legal Notice" >
            <LegalNotice />
        </MarkdownPage>
    </>
)
