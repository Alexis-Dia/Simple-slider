import { default as React, Component } from 'react'
import { default as Fade } from 'react-fade'

const fadeDuration = 10

class FadeExample extends Component {

    state = {
        fadeOut: false,
        visibility: 'visible'
    }

    componentDidUpdate(nextProps, { fadeOut }) {
        if (fadeOut) {
            setTimeout(() => {
                this.setState({
                    visibility: 'hidden'
                })
            }, fadeDuration)
        }
    }

    render() {
        return (
            <div>
                <Fade
                    out={this.state.fadeOut}
                    duration={fadeDuration}
                    style={{
                        visibility: this.state.visibility
                    }}
                >
                    <p>I am so faded</p>
                </Fade>
                <button onClick={() => this.setState({ fadeOut: true })}>
                    Fade out
                </button>
            </div>
        )
    }
}

export default FadeExample;