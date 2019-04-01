import Layout from '../components/Layout.js'
import Head from 'next/head'
import { Alert } from 'reactstrap';

const title = "CryFS: A cryptographic filesystem for the cloud"
const description = "CryFS encrypts your Dropbox and protects you against hackers and data leaks. It also works well together with other cloud providers."

const Index = () => (
    <Layout>
        <Head>
            {/* TODO translate tags in here*/}
            <meta property="og:title" content={title} />
            <meta property="og:url" content="https://www.cryfs.org" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={require("../assets/images/logo.png")} />
            <meta property="og:description" content={description} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
        <img src={require("../assets/images/teaser.jpg")} />
        <p>Hello Next.js</p>
        <Alert color="primary">
            This is a primary alert — check it out!
        </Alert>
    </Layout>
)

export default Index
