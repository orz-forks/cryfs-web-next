import Layout from '../components/Layout.js'
import Head from 'next/head'
import Link from 'next/link'
import AlternatingSections from '../components/AlternatingSections.js'
import Teaser from '../components/Teaser.js'
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faLightbulb, faLock, faComments } from '@fortawesome/free-solid-svg-icons'

const title = "CryFS: A cryptographic filesystem for the cloud"
const description = "CryFS encrypts your Dropbox and protects you against hackers and data leaks. It also works well together with other cloud providers."

const OpenGraphTags = () => (
    <Head>
        {/* TODO translate tags in here*/}
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://www.cryfs.org" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={require("../assets/images/logo.png")} />
        <meta property="og:description" content={description} />
    </Head>
)

const BulletsSection = () => {
    const style = StyleSheet.create({
        icon: {
            fontSize: '150px',
        },
        title: {
            marginTop: '20px',
            marginBottom: '20px',
        },
    })

    const BulletPoint = props => (
        <Col lg="4">
            <div className="text-center">
                <FontAwesomeIcon icon={props.icon} className={css(style.icon)} />
                <h2 className={css(style.title)}>{props.title}</h2>
                {props.children}
                <p>
                    <Link href={props.details_link_target}>
                        <Button outline color="secondary">
                            {/*TODO Translate*/}
                            Details &nbsp;
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </Button>
                    </Link>
                </p>
            </div>
        </Col>
    )

    return <Container>
            <Row>
                {/*TODO Translate*/}
                <BulletPoint title="Simple" icon={faLightbulb} details_link_target="/tutorial">
                    <p>Easy to setup and works with a lot of cloud storage providers. It runs in the background - you won't notice it when accessing your files in your daily workflow.</p>
                </BulletPoint>
                <BulletPoint title="Secure" icon={faLock} details_link_target="/howitworks">
                    <p>Your data only leaves your computer in encrypted form. File contents, metadata and directory structure are all secure from someone who hacked your cloud.</p>
                </BulletPoint>
                <BulletPoint title="Free & Open Source" icon={faComments} details_link_target="http://www.gnu.org/philosophy/free-sw.html">
                    <p>Released under LGPL and available on <a href="https://github.com/cryfs/cryfs">GitHub</a>. Free to use for everyone. Its security is verifiable and the community can work on improvements.</p>
                </BulletPoint>
            </Row>
        </Container>
}

const NewsletterSection = () => {
    const style = StyleSheet.create({
        registrationBox: {
            textAlign: 'center',
            marginTop: '20px',
        },
        registrationButton: {
            marginLeft: '5px',
        },
    })

    return <Container className="text-center">
            {/*TODO Translate*/}
            <h2>Let us notify you when CryFS is stable!</h2>
            <div className={css(style.registrationBox)}>
                <Form inline className="justify-content-center">
                    <FormGroup>
                        <Label for="inputEmail" className="sr-only">Email Address:</Label>
                        <Input type="email" name="email" id="inputEmail" placeholder="Enter email" required={true} autoComplete="off" />
                    </FormGroup>
                    <Button color="primary" className={css(style.registrationButton)}>
                        Get Notified &nbsp;
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Button>
                </Form>
            </div>
        </Container>
}

const Index = () => (
    <Layout>
        <OpenGraphTags />

        <Head>
            {/* TODO translate tags in here*/}
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>

        <Teaser />
        <AlternatingSections>
            <section><BulletsSection /></section>
            <section><NewsletterSection /></section>
            <section>third</section>
            <section>fourth</section>
            <section>fifth</section>
        </AlternatingSections>
    </Layout>
)

export default Index
