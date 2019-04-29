import * as React from 'react';
import './styles.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const fadeStyles = {
    "position":"absolute",
    "left":0,
    "-webkit-transition": "opacity 1s ease-in-out",
    "-moz-transition": "opacity 1s ease-in-out",
    "-o-transition": "opacity 1s ease-in-out",
    "transition": "opacity 1s ease-in-out",
    "opacity":1,
    "-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
    "filter": "alpha(opacity=1)",
    "animation": "zoomin 1s ease-in",
};

const noFadeStyles = {
};

class Slider extends React.Component {
    state = {
        fadeStyle: 0,
        curIndex: 0,
        length: 0,
    };

    componentDidMount= ()=> {
        this.setState({ length: this.props.images.length });
    }

    nextIndex = () => {
        if (this.state.curIndex >= 1) {
            this.setState({ fadeStyle: 1, curIndex: this.state.curIndex - 1 });
        }
    };

    prevIndex = () => {
        if (this.state.curIndex < this.state.length - 1) {
            this.setState({ fadeStyle: 1, curIndex: this.state.curIndex + 1 });
        }
    };

    render() {
        return (
            <ReactScrollWheelHandler upHandler={this.prevIndex} downHandler={this.nextIndex}>
                <div className="header-wrapper">
                    <div id="cf7" className="shadow">
                        {this.props.images.map((child, index) =>
                            <div key={index} data-index={index}>
                                <img style={this.state.curIndex === index ? fadeStyles : noFadeStyles} width="100%" height="100%"
                                     src={child}/>
                            </div>
                        )}
                    </div>
                </div>
            </ReactScrollWheelHandler>
        );
    }
}

export default Slider;