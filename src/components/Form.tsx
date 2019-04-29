import * as React from 'react';
import Slider from './Slider'

export interface FormState {
  [key: string]: number | string;
}

const defaultState: FormState = {
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

  render() {
    const { address, amount } = this.state;
    return (
      <React.Fragment>
          <Slider images={[
              'Capture4.JPG',
              'Capture5.JPG',
              'Capture6.JPG',
              'Capture7.JPG',
              'Capture8.JPG',
          ]}
          />
      </React.Fragment>
    );
  }
}

export default Form;
