import {Container} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite/no-important'

const style = StyleSheet.create({
    header: {
        fontSize: '70px',
    },
})

export default (props) => (
    <section {...props}>
        <Container>
            <h1 className={css(style.header)}>{props.title}</h1>
            {(typeof props.subtitle != 'undefined') &&
                <p className="lead">{props.subtitle}</p>
            }
        </Container>
    </section>
)
