"use strict";

import LegalNotice from '../content/legal_notice.md'
import MarkdownPage from '../components/MarkdownPage.js'
import MetaTags from '../components/MetaTags.js'

export default (props) => (
    <>
        {/* TODO translate tags in here*/}
        <MetaTags
            title="CryFS: Legal Notice"
            url="https://www.cryfs.org/legal_notice"
            description="Legal Notice for CryFS. CryFS encrypts your Dropbox and protects you against hackers and data leaks. It also works well together with other cloud providers."
        />
        <MarkdownPage title="Legal Notice" >
            <LegalNotice />
        </MarkdownPage>
    </>
)
