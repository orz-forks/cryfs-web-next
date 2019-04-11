import {css, StyleSheet} from "aphrodite";
import {Button, Collapse, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faSpinner} from "@fortawesome/free-solid-svg-icons";
import fetch from 'unfetch'

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

class NewsletterSection extends React.Component {
    style = StyleSheet.create({
        registrationBox: {
            textAlign: 'center',
            marginTop: '20px',
        },
        registrationButton: {
            marginLeft: '5px',
        },
    })

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

    onSubmit = async (e) => {
        e.preventDefault()
        console.log('submit ')
        console.log(this.state.email)

        const url = "https://cryfs.us12.list-manage.com/subscribe/post"
        let response = await fetch(url, {
            method: 'POST',
            //TODO needed? headers: { 'Content-Type': 'application/json' },
            body: {
                u: "b5782cd266b5930df53c7234e",
                id: "fee95ae90b",
                b_b5782cd266b5930df53c7234e_fee95ae90b: "",
                EMAIL: "",
                subscribe: "Subscribe",
            }
        })
        if (!response.ok) {
            throw response // TODO
        }
        let data = await response.json()
        console.log("success: " + data)

        return false
    }

    render = () => {
        return <Container className="text-center">
            {/*TODO Translate*/}
            <h2>Let us notify you when CryFS is stable!</h2>
            <div className={css(this.style.registrationBox)}>
                <Form inline onSubmit={this.onSubmit} className="justify-content-center">
                    <FormGroup>
                        <Label for="inputEmail" className="sr-only">Email Address:</Label>
                        <Input type="email" name="email" id="inputEmail" placeholder="Enter email" required={true}
                               autoComplete="off" value={this.state.email} onChange={this.onEmailChange} />
                    </FormGroup>
                    <Button color="primary" className={css(this.style.registrationButton)}>
                        Get Notified &nbsp;
                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                    </Button>
                </Form>
                <Collapse isOpen={false} className={css(formStyle.notificationArea)}>
                    {/*TODO Translate*/}
                    <Collapse isOpen={false} className={`lead ${css(formStyle.notification_success)}`}>
                        Thank you. You'll get a confirmation email shortly.
                    </Collapse>
                    <Collapse isOpen={false} className={`lead ${css(formStyle.notification_error)}`}>
                        Invalid email address.
                    </Collapse>
                    <Collapse isOpen={false} className={`lead ${css(formStyle.notification_error)}`}>
                        You unsubscribed before and we can't resubscribe you to protect against spam. Please send an
                        email to messmer@cryfs.org.
                    </Collapse>
                    <Collapse isOpen={false} className={`lead ${css(formStyle.notification_error)}`}>
                        An error occurred. Please subscribe by sending an email to messmer@cryfs.org.
                    </Collapse>
                    <Collapse isOpen={false}>
                        <FontAwesomeIcon icon={faSpinner}
                                         className={`${css(formStyle.notification_spinner)} fa-pulse`}/>
                    </Collapse>
                </Collapse>
            </div>
        </Container>
    }
}

export default NewsletterSection
