"use strict";

import {Container} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite/no-important'

const style = StyleSheet.create({
    title: {
        fontSize: '4.5rem',
    },
    subtitle: {
        fontSize: '1.7rem',
    },
})

export default (props) => (
    <section {...props}>
        <Container>
            <h1 className={css(style.title)}>{props.title}</h1>
            {(typeof props.subtitle != 'undefined') &&
                <p className={css(style.subtitle)}>{props.subtitle}</p>
            }
            {props.children}
        </Container>
    </section>
)
