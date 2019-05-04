"use strict";

import {css, StyleSheet} from "aphrodite";
import {Button, Collapse, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faSpinner} from "@fortawesome/free-solid-svg-icons";
import fetch from 'unfetch'

const style = StyleSheet.create({
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
    registrationBox: {
        textAlign: 'center',
        marginTop: '20px',
    },
    registrationButton: {
        marginLeft: '5px',
    },
})

class NewsletterSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
        }
    }

    onEmailChange = (val) => {
        this.setState({
            email: val.target.value,
        })
    }

    onSubmit = async () => {
        try {
            const response = await fetch('https://backend.cryfs.org/newsletter/register', {
                method: 'POST',
                header: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    token: 'iSZ9_2a5PT-U',
                }),
            })

            if (response.ok) {
                this.setState({
                    notification: 'success',
                })
            } else {
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

    render = () => {
        return <Container className="text-center">
            {/*TODO Translate*/}
            <h2>Let us notify you when CryFS is stable!</h2>
            <div className={css(style.registrationBox)}>
                <Form inline onSubmit={this.onSubmit} className="justify-content-center">
                    <FormGroup>
                        <Label for="inputEmail" className="sr-only">Email Address:</Label>
                        <Input type="email" name="email" id="inputEmail" placeholder="Enter email" required={true}
                               autoComplete="off" value={this.state.email} onChange={this.onEmailChange} />
                    </FormGroup>
                    <Button color="primary" className={css(style.registrationButton)}>
                        Get Notified &nbsp;
                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                    </Button>
                </Form>
                <Collapse isOpen={false} className={css(style.notificationArea)}>
                    {/*TODO Translate*/}
                    <Collapse isOpen={false} className={`lead ${css(style.notification_success)}`}>
                        Thank you. You'll get a confirmation email shortly.
                    </Collapse>
                    <Collapse isOpen={false} className={`lead ${css(style.notification_error)}`}>
                        Invalid email address.
                    </Collapse>
                    <Collapse isOpen={false} className={`lead ${css(style.notification_error)}`}>
                        You unsubscribed before and we can't resubscribe you to protect against spam. Please send an
                        email to messmer@cryfs.org.
                    </Collapse>
                    <Collapse isOpen={false} className={`lead ${css(style.notification_error)}`}>
                        An error occurred. Please subscribe by sending an email to messmer@cryfs.org.
                    </Collapse>
                    <Collapse isOpen={false}>
                        <FontAwesomeIcon icon={faSpinner}
                                         className={`${css(style.notification_spinner)} fa-pulse`}/>
                    </Collapse>
                </Collapse>
            </div>
        </Container>
    }
}

export default NewsletterSection
