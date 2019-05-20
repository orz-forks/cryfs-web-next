"use strict";

import { withRouter} from "next/dist/client/router";
import Url from "url-parse";
import {Modal, ModalHeader, ModalFooter, Button} from "reactstrap";
import { RoutingListener } from '../RoutingListener'

class RouteHashBasedModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: new Url(props.router.asPath).hash == this.props.hash
        }

        this.routingListener = new RoutingListener(props.router.asPath)
        this.routingListener.addListener(this.onRouteChangeComplete)
    }

    toggle = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    onRouteChangeComplete = (url) => {
        const url_ = new Url(url)
        this.setState({
            show: url_.hash == this.props.hash,
        })
    }

    componentDidUpdate = () => {
        // If toggle() was called, the url wasn't updated yet.
        // We need to make sure the URL gets updated.

        const url = new Url(this.routingListener.url)
        const url_has_flag = url.hash == this.props.hash
        if (url_has_flag && !this.state.show) {
            url.set('hash', '')
            const newUrl = url.toString()
            this.props.router.replace(newUrl)
        } else if (!url_has_flag && this.state.show) {
            url.set('hash', this.props.hash)
            const newUrl = url.toString()
            this.props.router.replace(newUrl)
        }
    }

    componentWillUnmount = () => {
        this.routingListener.finish()
    }

    render = () => {
        let {labelledBy, header, showCloseButtonInFooter, ...forwardProps} = this.props

        return <Modal isOpen={this.state.show} toggle={this.toggle} {...forwardProps}>
            {(typeof this.props.header != 'undefined') &&
            <ModalHeader id={labelledBy} toggle={this.toggle}>
                {header}
            </ModalHeader>
            }
            {this.props.children}
            {(showCloseButtonInFooter) &&
            <ModalFooter>
                <Button outline color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
            }
        </Modal>
    }
}

export default withRouter(RouteHashBasedModal)
