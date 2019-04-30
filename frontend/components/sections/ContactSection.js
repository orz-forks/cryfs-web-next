import {css, StyleSheet} from "aphrodite";
import {Button, Col, Collapse, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faSpinner} from "@fortawesome/free-solid-svg-icons";

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

const contactStyle = StyleSheet.create({
    content: {
        marginTop: '20px',
    },
})

export default () => (
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
)