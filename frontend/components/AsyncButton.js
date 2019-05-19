"use strict";

import {Button, Collapse} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

// A button that has a onClick handler attached which potentially takes a bit more time.
// The button will disable itself and show a progress spinner while running the onClick handler.
class AsyncButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            running: false,
        }

        const {onClick, ...forwardProps} = props
        this.onClick = onClick
        this.forwardProps = forwardProps
    }

    clickHandler = async (event) => {
        event.preventDefault()

        if (this.state.running) {
            // Already running. Somehow it got triggered twice. Ignore it.
            console.log("Button onClick handler already running. Ignore second trigger.")
            return
        }

        this.setState({
            running: true,
        })

        try {
            await this.props.onClick(event)
        } finally {
            this.setState({
                running: false,
            })
        }
    }

    render = () => (
        <Button onClick={this.clickHandler} disabled={this.state.running} {...this.forwardProps}>
            <Collapse isOpen={!this.state.running}>
                {this.props.children}
            </Collapse>
            <Collapse isOpen={this.state.running}>
                <FontAwesomeIcon icon={faSpinner} className="fa-pulse" />
            </Collapse>
        </Button>
    )
}

export default AsyncButton
