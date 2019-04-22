import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const style = StyleSheet.create({
    console: {
        backgroundColor: 'black',
        color: '#eee',
        padding: '15px',
    },
    linestart: {
        color: '#008800',
        marginRight: '0.5em',
        // disallow selecting it
        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        '-khtml-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
    },
    line: {
        width: '100%',
    },
    output: {
        color: '#888',
    },
})

export const Console = (props) => (
    <pre className={css(style.console)}>
        {props.children}
    </pre>
)

export const ConsoleCommand = (props) => (
    <div className={css(style.line)}>
        <span className={css(style.linestart)}>$</span>
        {props.children}
    </div>
)

export const ConsoleOutput = (props) => (
    <div className={css(style.line, style.output)}>
        {props.children}
    </div>
)
