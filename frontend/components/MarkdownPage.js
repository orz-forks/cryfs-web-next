"use strict";

import Layout from './Layout.js'
import AlternatingSections from "../components/AlternatingSections";
import {Container} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite/no-important'

// TODO OpenGraph + title

export default (props) => {
    const style = StyleSheet.create({
        header: {
            fontSize: '70px',
        },
    })

    return <Layout>
        <AlternatingSections start_index={1}>
            <section>
                <Container>
                    <h1 className={css(style.header)}>{props.title}</h1>
                </Container>
            </section>
            <section>
                <Container>
                    {props.children}
                </Container>
            </section>
        </AlternatingSections>
    </Layout>
}
