import * as React from 'react';
import './styles.css';

class Slider extends React.Component {
    state = { index: 0 };

    dotClicked = e => {
        this.setState({ index: parseInt(e.target.dataset.index, 10) });
    };

    render() {
        return (
            <div className="slider-container">
                <div
                    className="slider-innerContainer"
                    style={{ left: -100 * this.state.index + "%" }}>
                    {this.props.children.map((child, index) =>
                        <div key={index}>{child}</div>)}
                </div>
                <div className="slider-dots">
                    {this.props.children.map((child, index) =>
                        <div key={index} data-index={index} onClick={this.dotClicked}>
                            {index === this.state.index ? "◉" : "◌"}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Slider;

