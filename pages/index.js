import Layout from '../components/Layout.js'
import Head from 'next/head'
import Link from 'next/link'
import { Alert, Button, Container, Row, Col } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faLightbulb, faLock, faComments } from '@fortawesome/free-solid-svg-icons'

const title = "CryFS: A cryptographic filesystem for the cloud"
const description = "CryFS encrypts your Dropbox and protects you against hackers and data leaks. It also works well together with other cloud providers."

const teaser_width = 5308
const teaser_height = 2636
const wanted_teaser_height_md = 1000

const mdStyle = StyleSheet.create({
    teaser: {
        position: 'relative',
        height: `${wanted_teaser_height_md}px`,
        width: '100%',
        overflowX: 'hidden',
    },
    content: {
        position: 'absolute',
        right: '0px',
        height: `${wanted_teaser_height_md}px`,
        width: `${Math.floor(teaser_width/teaser_height*wanted_teaser_height_md)}px`,
    },
    image: {
        position: 'absolute',
        width: `${Math.floor(teaser_width/teaser_height*wanted_teaser_height_md)}px`,
        height: wanted_teaser_height_md,
        backgroundSize: `${Math.floor(teaser_width/teaser_height*wanted_teaser_height_md)}px ${wanted_teaser_height_md}px`,
        backgroundImage: `url(${require('../assets/images/teaser.jpg')})`,
        backgroundRepeat: 'no-repeat',
    },
    title_text: {
        position: 'absolute',
        marginTop: '230px',
        marginLeft: '1080px',
        width: '600px',
    },
    title_text_h1: {
        fontSize: '36px',
        color: '#a8a8a8',
        marginBottom: '50px',
    },
    title_text_p: {
        fontSize: '21px',
        marginTop: '60px',
        color: '#989898',
    },
})

const smStyle = StyleSheet.create({
    teaser: {
        marginTop: '0p',
        backgroundColor: '#c2e1f2',
        paddingTop: '50px',
        paddingBottom: '50px',
    },
    content: {
        marginLeft: '15px',
        marginRight: '15px',
    },
    image: {
        marginTop: '-20px',
        fontSize: '100px',
        color: '#909090',
    },
    title_text_h1: {
        color: 'black',
        fontSize: '36px',
    },
    title_text_p: {
        fontSize: '21px',
        marginTop: '30px',
        marginBottom: '-20px',
        color: '#111',
    },
})

const tutorialBtnStyle = StyleSheet.create({
    button: {
        marginLeft: '20px',
    },
})

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

{/*TODO Translate*/}
const teaser_header = "Keep your data safe in the cloud"
const teaser_paragraph1 = "CryFS encrypts your files, so you can safely store them anywhere. It works well together with cloud services like Dropbox, iCloud, OneDrive and others."

const Teaser = () => (
    <div>
        <section className={`${css(mdStyle.teaser)} d-none d-lg-block`}>
            <div className="clearfix">
                <div className={css(mdStyle.content)}>
                    <div className={css(mdStyle.image)} />
                    <div className={`${css(mdStyle.title_text)} lead text-center`}>
                        {/*TODO Translate*/}
                        <h1 className={css(mdStyle.title_text_h1)}>{teaser_header}</h1>
                        <p className={css(mdStyle.title_text_p)}>{teaser_paragraph1}</p>
                        <p className={css(mdStyle.title_text_p)}>
                            <Button color="primary" size="lg">Download(beta)</Button>
                            <Link href="/tutorial">
                                <Button color="info" size="lg" className={css(tutorialBtnStyle.button)}>Tutorial</Button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className={`${css(smStyle.teaser)} d-block d-lg-none`}>
            <div className="clearfix">
                <div className={css(smStyle.content)}>
                    <div className={`${smStyle.image} text-center`}>
                        <img src={require('../assets/images/logo.png')} alt="Logo" width="200" height="150" />
                        <div className="lead text-center title-text">
                            <h1 className={css(smStyle.title_text_h1)}>{teaser_header}</h1>
                            <p className={css(smStyle.title_text_p)}>{teaser_paragraph1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

const AlternatingSections = props => {
    const styles = [
        StyleSheet.create({
            section: {
                paddingTop: '50px',
                paddingBottom: '50px',
                background: 'white',
                padding: '50px 0px',
            },
        }),
        StyleSheet.create({
            section: {
                paddingTop: '50px',
                paddingBottom: '50px',
                background: '#c2e1f2',
                padding: '50px 0px',
            },
        }),
    ]

    let styleIndex = 0

    return <div>{
        React.Children.map(props.children, child => {
            if (child.type != "section") {
                throw `AlternatingSections component can only have section children but found ${child.type}`
            }
            let oldClassName = child.props.className
            if (oldClassName) {
                oldClassName += " "
            } else {
                oldClassName = ""
            }
            const style = styles[styleIndex]
            styleIndex = (styleIndex + 1) % styles.length
            return React.cloneElement(child, {className: oldClassName + css(style.section)})
        })
    }</div>
}

const BulletsSection = () => {
    const iconStyle = StyleSheet.create({
        md: {
            fontSize: '200px',
        },
        sm: {
            fontSize: '150px',
        },
    })
    const titleStyle = StyleSheet.create({
        title: {
            marginTop: '20px',
            marginBottom: '20px',
        },
    })

    const BulletPoint = props => (
        <Col lg="4">
            <div className="text-center">
                <div className="d-none d-lg-block">
                    <FontAwesomeIcon icon={props.icon} className={css(iconStyle.md)} />
                </div>
                <div className="d-block d-lg-none">
                    <FontAwesomeIcon icon={props.icon} className={css(iconStyle.sm)} />
                </div>
                <h2 className={css(titleStyle.title)}>{props.title}</h2>
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

    return <section>
        <Container>
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
    </section>
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
            <section>second</section>
            <section>third</section>
            <section>fourth</section>
            <section>fifth</section>
        </AlternatingSections>

        <p>Hello Next.js</p>
        <Alert color="primary">
            This is a primary alert — check it out!
        </Alert>
    </Layout>
)

export default Index
