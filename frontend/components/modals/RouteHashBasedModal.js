"use strict";

import {Router, withRouter} from "next/dist/client/router";
import Url from "url-parse";
import {Modal} from "reactstrap";

class RoutingListener {
    constructor(initialUrl) {
        this.url = initialUrl

        this.onChangeCallbacks = []

        Router.events.on('routeChangeComplete', this.onRouteChangeComplete)
        Router.events.on('hashChangeComplete', this.onRouteChangeComplete)
    }

    finish = () => {
        Router.events.off('routeChangeComplete', this.onRouteChangeComplete)
        Router.events.off('hashChangeComplete', this.onRouteChangeComplete)
    }

    addListener = (func) => {
        this.onChangeCallbacks.push(func)
    }

    onRouteChangeComplete = (url) => {
        this.url = url
        for (let callback of this.onChangeCallbacks) {
            callback(this.url)
        }
    }
}

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
        return (
            <Modal isOpen={this.state.show} toggle={this.toggle} {...this.props}>
                {this.props.children}
            </Modal>
        );
    }
}

export default withRouter(RouteHashBasedModal)
