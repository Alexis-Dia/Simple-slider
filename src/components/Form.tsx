import * as React from 'react';
import Slider from './Slider'

export interface FormState {
  [key: string]: number | string;
}

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}

const images = ['pic5.png'];


const defaultState: FormState = {
  address: '0x',
  amount: 0,
  images: ['pic5.png']
};

const inputStyles = {
    "border-radius": "0px",
    "background": "transparent",
    "border": "none",
    "border-bottom": "1px solid #000000",
    "outline":"none",
    "box-shadow":"none",

};

class Form extends React.Component<{}, FormState> {
  state = defaultState;

    componentDidMount= ()=> {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount= ()=> {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll= (event: React.ChangeEvent<HTMLInputElement>) =>{
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
        console.log(itemTranslate)
        this.setState({
            transform: itemTranslate
        });
    }

    gotoPrevious= ()=> {
        this.setState({
        });
    }

    gotoNext= ()=> {
        this.setState({
            images: ['pic6.png']
        });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'amount' && event.target.value >= 0) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    } else if (event.target.name === 'address') {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
  }

  render() {
    const { address, amount } = this.state;
    return (
      <React.Fragment>
          <Slider>
              <img src="https://livewallpaper.info/wp-content/uploads/2016/06/wallpapers-cool8.jpg" />
              <img src="https://livewallpaper.info/wp-content/uploads/2016/06/wallpapers-cool7.jpg" />
              <img src="https://livewallpaper.info/wp-content/uploads/2016/06/wallpapers-cool3.jpg" />
              <div><h2>Slide4</h2>Slide 4 is plain</div>
          </Slider>
      </React.Fragment>
    );
  }
}

export default Form;
