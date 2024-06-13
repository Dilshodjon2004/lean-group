import {Component} from "react";
import "./Slider.scss";

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  goToSlide = (index) => {
    this.setState({
      currentIndex: index,
    });
  };
  render() {
    const {slides} = this.props;
    const {currentIndex} = this.state;
    const currentSlide = slides[currentIndex];
    console.log(currentSlide);
    return (
      <div className='slider'>
        <div
          className='slide'
          style={{backgroundImage: `url(${currentSlide.image})`}}
        >
          <div className='container'>
            <div className='slide__wrapper'>
              <p className='short__description'>
                {currentSlide.short_description}
              </p>
              <h2 className='product__name'>{currentSlide.product_name}</h2>
              <p className='long__description'>
                {currentSlide.long_description}
              </p>
              <button className='btn'>Каталог</button>
            </div>
            <div className='indicators'>
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => this.goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
