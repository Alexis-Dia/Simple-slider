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
    "-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
    "filter": "alpha(opacity=0)",
    "animation": "zoomin 1s ease-in",
    "-webkit-animation": "zoomin 1s ease-in",
    "transition": "all 1s ease-in",
    "overflow": "hidden",
    "width":"100%",
    "height":"100%",
};

const noFadeStyles = {
/*    "position":"absolute",
    "left":0,
    "-webkit-transition": "opacity 1s ease-in-out",
    "-moz-transition": "opacity 1s ease-in-out",
    "-o-transition": "opacity 1s ease-in-out",
    "transition": "opacity 1s ease-in-out",
    "opacity":0,
    "-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
    "filter": "alpha(opacity=0)",
    //"animation": "zoomin 1s ease-in",*/
};

class Slider extends React.Component {
    state = {
        fadeStyle: 0,
        curIndex: 0,
        length: 0,
    };

    componentDidMount= ()=> {
        console.log("this.props.images.length")
        this.setState({ length: this.props.images.length });
    }

    dotClicked = (e, index) => {
        console.log("index = ", index)
        this.setState({ fadeStyle: 1 });
        setTimeout(() => {
            console.log("111", index)
            this.setState({ fadeStyle: 0, curIndex: index });
        }, 1);
    };

    nextIndex = () => {
        console.log("1")
        if (this.state.curIndex >= 1) {
            this.setState({ fadeStyle: 1, curIndex: this.state.curIndex - 1 });
        }
    };

    prevIndex = () => {
        console.log("2")
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
{/*                <p id="cf7_controls">
                    <span onClick={(e) => {
                        this.dotClicked(e, 0)
                    }} className="selected">Image 1</span>
                    <span onClick={(e) => {
                        this.dotClicked(e, 1)
                    }}>Image 2</span>
                    <span>Image 3</span>
                    <span>Image 4</span>
                </p>*/}
            </ReactScrollWheelHandler>
        );
    }
}

export default Slider;

