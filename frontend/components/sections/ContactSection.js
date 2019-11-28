"use strict";

import {css, StyleSheet} from "aphrodite";
import {Col, Collapse, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import fetch from 'unfetch'
import AsyncButton from '../AsyncButton'
import {logAnalyticsEvent} from '../Analytics'

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
})

const contactStyle = StyleSheet.create({
    content: {
        marginTop: '20px',
    },
})

class ContactSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notification: '',
            email: '',
            message: '',
        }
    }

    send = async () => {
        this.setState({
            notification: '',
        })

        await logAnalyticsEvent('contact_form', 'click')

        try {
            const response = await fetch('https://backend.cryfs.org/contact/send', {
                method: 'POST',
                header: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    message: this.state.message,
                    token: 'fd0kAn1zns',
                }),
            })

            if (response.ok) {
                await logAnalyticsEvent('contact_form', 'success')
                this.setState({
                    notification: 'success',
                })
            } else {
                await logAnalyticsEvent('contact_form', 'error')
                this.setState({
                    notification: 'error',
                })
            }
        } catch (err) {
            this.setState({
                notification: 'error',
            })
        }
    }

    setEmail = (event) => {
        this.setState({email: event.target.value})
    }

    setMessage = (event) => {
        this.setState({message: event.target.value})
    }

    render = () => (
        <Container className="text-center">
            <h2>Contact Us</h2>
            <div className={css(contactStyle.content)}>
                <Col md={{size: '6', offset: 3}}>
                    <Form>
                        {/*TODO Translate*/}
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <Label for="contact_form_message" className="sr-only">Message:</Label>
                                    <textarea id="contact_form_message" name="message" className="form-control"
                                              style={{height: '140px'}} required={true}
                                              placeholder="Your message to us. We're looking forward to your feedback, ideas and criticism. Please be blunt."
                                              value={this.state.message} onChange={this.setMessage}/>
                                </FormGroup>
                            </Col>
                            <Col md="8">
                                <FormGroup>
                                    <Label for="contact_form_email" className="sr-only">Your Email:</Label>
                                    <Input type="email" name="email" id="contact_form_email"
                                           placeholder="Your email address (optional)" autoComplete="off"
                                           value={this.state.email} onChange={this.setEmail}/>
                                </FormGroup>
                            </Col>
                            <Col md={{size: '4', offset: 0}}>
                                <FormGroup>
                                    <AsyncButton type="Submit" onClick={this.send} color="primary" block={true}>
                                        Send &nbsp;
                                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                                    </AsyncButton>
                                </FormGroup>
                            </Col>
                            <div className="clearfix"/>
                            <Col md="12">
                                <Collapse isOpen={this.state.notification != ''}
                                          className={css(formStyle.notificationArea)}>
                                    <Collapse isOpen={this.state.notification == 'success'}
                                              className={`lead ${css(formStyle.notification_success)}`}>
                                        Thank you.
                                    </Collapse>
                                    <Collapse isOpen={this.state.notification == 'error'}
                                              className={`lead ${css(formStyle.notification_error)}`}>
                                        Sorry, there was an error sending your message.
                                    </Collapse>
                                </Collapse>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </div>
        </Container>
    )
}

export default ContactSection
