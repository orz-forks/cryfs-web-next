"use strict";

import Layout from '../components/Layout.js'
import Link from 'next/link'
import AlternatingSections from '../components/AlternatingSections.js'
import DonateModal from '../components/modals/Donate.js'
import Teaser from '../components/Teaser.js'
import NewsletterSection from '../components/sections/NewsletterSection.js'
import { Form, FormGroup, Label, Input, Button, Container, Row, Col, Collapse } from 'reactstrap';
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faLightbulb, faLock, faComments, faSpinner } from '@fortawesome/free-solid-svg-icons'
import MetaTags from "../components/MetaTags";
import Head from "next/head";

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
                    { (!props.external_link) ?
                        <Link href={props.details_link_target}>
                            <Button outline color="secondary">
                                {/*TODO Translate*/}
                                Details &nbsp;
                                <FontAwesomeIcon icon={faAngleDoubleRight}/>
                            </Button>
                        </Link> :
                        <Button outline color="secondary" href={props.details_link_target}>
                            {/*TODO Translate*/}
                            Details &nbsp;
                            <FontAwesomeIcon icon={faAngleDoubleRight}/>
                        </Button>
                    }
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
                <BulletPoint title="Free & Open Source" icon={faComments} details_link_target="http://www.gnu.org/philosophy/free-sw.html" external_link={true} >
                    <p>Released under LGPL and available on <a href="https://github.com/cryfs/cryfs">GitHub</a>. Free to use for everyone. Its security is verifiable and the community can work on improvements.</p>
                </BulletPoint>
            </Row>
        </Container>
}

const formStyle = StyleSheet.create({
    notificationArea: {
        marginTop: '30px',
    },
    notification_success: {
        color: 'green',
        marginTop: '10px',
        marginBottom: '10px',
    },
    notification_error: {
        color: 'red',
        marginTop: '10px',
        marginBottom: '10px',
    },
    notification_spinner: {
        color: '#909090',
        marginTop: '10px',
        marginBottom: '10px',
    },
})

const ContactSection = () => {
    const style = StyleSheet.create({
        content: {
            marginTop: '20px',
        },
    })
    return <Container className="text-center">
        <h2>Contact Us</h2>
        <div className={css(style.content)}>
            <Col md={{size: '6', offset: 3}}>
                <Form>
                    {/*TODO Translate*/}
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <Label for="contact_form_message" className="sr-only">Message:</Label>
                                <textarea id="contact_form_message" name="message" className="form-control" style={{height: '140px'}} required={true} placeholder="Your message to us. We're looking forward to your feedback, ideas and criticism. Please be blunt." />
                            </FormGroup>
                        </Col>
                        <Col md="8">
                            <FormGroup>
                                <Label for="contact_form_email" className="sr-only">Your Email:</Label>
                                <Input type="email" name="email" id="contact_form_email" placeholder="Your email address (optional)" autoComplete="off" />
                            </FormGroup>
                        </Col>
                        <Col md={{ size: '4', offset: 0}}>
                            <FormGroup>
                                <Button type="submit" color="primary" block={true}>
                                    Send &nbsp;
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                                </Button>
                            </FormGroup>
                        </Col>
                        <div className="clearfix" />
                        <Col md="12">
                            <Collapse isOpen={false} className={css(formStyle.notificationArea)}>
                                <Collapse isOpen={false} className={`lead ${css(formStyle.notification_success)}`}>
                                    Thank you.
                                </Collapse>
                                <Collapse isOpen={false} className={`lead ${css(formStyle.notification_error)}`}>
                                    Sorry, there was an error sending your message.
                                </Collapse>
                                <Collapse isOpen={false} className={`lead ${css(formStyle.notification_error)}`}>
                                    Sorry, there was an error sending your message.
                                </Collapse>
                                <Collapse isOpen={false}>
                                    <FontAwesomeIcon icon={faSpinner} className={`${css(formStyle.notification_spinner)} fa-pulse`} />
                                </Collapse>
                            </Collapse>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </div>
    </Container>
}

export default () => (
    <Layout>
        {/* TODO translate tags in here*/}
        <MetaTags
            title="CryFS: A cryptographic filesystem for the cloud"
            url="https://www.cryfs.org"
            description="CryFS encrypts your Dropbox and protects you against hackers and data leaks. It also works well together with other cloud providers."
        />

        <Teaser />

        <DonateModal />

        <AlternatingSections>
            <section><BulletsSection /></section>
            <section><NewsletterSection /></section>
            <section><ContactSection /></section>
        </AlternatingSections>
    </Layout>
)
