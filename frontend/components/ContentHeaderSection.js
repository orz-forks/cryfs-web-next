import {Container} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite/no-important'

export default (props) => {
    const style = StyleSheet.create({
        header: {
            fontSize: '70px',
        },
    })

    return <section {...props}>
        <Container>
            <h1 className={css(style.header)}>{props.title}</h1>
            {(typeof props.subtitle != 'undefined') &&
                <p className="lead">{props.subtitle}</p>
            }
        </Container>
    </section>
}
