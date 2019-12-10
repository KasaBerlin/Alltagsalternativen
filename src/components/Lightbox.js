import React, { Component } from "react";
import Lightbox from 'fslightbox-react'; 

class GridGallery extends Component {
  state = {
    isVisible: false,
    slide: 0,
  }
  showSlide = (slide) => {
    this.setState({
      isVisible: !this.state.isVisible,
      slide: slide
    });
  }
  render() {
    return (
      <div>

        <Lightbox
          toggler={this.state.isVisible}
          slide={this.state.slide}
          urls={[
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg',
            'image5.jpg',
            'image6.jpg'
          ]}
        />

        <img
          onClick={() => this.showSlide(1)}
          src="image1.jpg"
        />
        <img
          onClick={() => this.showSlide(2)}
          src="image2.jpg"
        />
        <img
          onClick={() => this.showSlide(3)}
          src="image3.jpg"
        />
        <img
          onClick={() => this.showSlide(4)}
          src="image4.jpg"
        />
        <img
          onClick={() => this.showSlide(5)}
          src="image5.jpg"
        />
        <img
          onClick={() => this.showSlide(6)}
          src="image6.jpg"
        />
        
      </div>
    );
  }
}

export default GridGallery;