import React, { Component } from 'react';
import Slide from './Slide';
import NextArrow from './Arrows/NextArrow';
import PreviousArrow from './Arrows/PreviousArrow';
import SliderDots from './SliderDots';

class Slider extends Component {
    state = {
      activeSlide: 0,
    };

  getSlide = (index) => {
    this.setState({
      activeSlide: index
    })
  };

  getPrevSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeSlide;
    let { images } = this.props;
    let slidesLength = images.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    this.setState({
      activeSlide: index
    })
  };

  getNextSlide = (e) => {
    e.preventDefault();

    let index = this.state.activeSlide;
    let { images } = this.props;
    let slidesLength = images.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeSlide: index
    });

  };

  render() {
    const { images } = this.props;
    return(
      <div className="sliderContent">
        <PreviousArrow prevSlide={e => this.getPrevSlide(e)}/>
        <ul className="slidesContent">
          {images.map((image, index) =>
              <Slide
                key={index}
                index={index}
                activeSlide={this.state.activeSlide}
                image={image}
              />)}
        </ul>
        <NextArrow nextSlide={e => this.getNextSlide(e)}/>
        <ul className="dotWrapper">
          {images.map((image, index) =>
            <SliderDots
              key={index}
              index={index}
              activeSlide={this.state.activeSlide}
              isActive={this.state.activeSlide === index}
              getSlide={e => this.getSlide(index)}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default Slider;