import * as React from 'react';
import './styles.css';

const fadeStyles = {
    "opacity": 0,
    "-webkit-transition": "all 0.5s ease-in-out",
    "-moz-transition": "all 0.5s ease-in-out",
    "-ms-transition": "all 0.5s ease-in-out",
    "-o-transition": "all 0.5s ease-in-out",
    "transition": "all 0.5s ease-in-out",
};

const nofadeStyles = {
};

class Slider extends React.Component {
    state = {
        index: 0,
        fadeStyle: 0,
    };

    dotClicked = e => {
        this.setState({ index: parseInt(e.target.dataset.index, 10) });
        this.setState({ fadeStyle: 1 });
        setTimeout(() => {
            console.log("111")
            this.setState({ fadeStyle: 0 });
        }, 700);
    };

    render() {
        return (
            <div className={this.state.fadeStyle === 1 ? "container-fade" : "no-container-fade"}>
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
            </div>
        );
    }
}

export default Slider;

