import React from 'react';
import classnames from 'classnames';
import styles from './Slideshow.css';

class Slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0
    };

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.setCurrentSlide = this.setCurrentSlide.bind(this);
  }

  setCurrentSlide(slide) {
    this.setState(() => (
          { slideIndex: slide }
    ));
  }

  nextSlide() {
    this.setState(({ slideIndex }, currentProps) => (
          { slideIndex: Math.min(slideIndex + 1, currentProps.data.length - 1) }
    ));
  }

  prevSlide() {
    this.setState(({ slideIndex }) => (
          { slideIndex: Math.max(0, slideIndex - 1) }
    ));
  }

  render() {
    const slides = this.props.data.map(({ img, caption }, i) => {
      const slideClass = classnames(styles.mySlides, styles.fade);

      return (
        <div key={i} className={slideClass} style={{ display: this.state.slideIndex === i ? 'block' : 'none' }}>
          <div className={styles.numbertext}>{`${i + 1} / ${this.props.data.length}`}</div>
          <img src={img} alt="" style={{ width: '100%' }} />
          <div className={styles.text}>{caption}</div>
        </div>
      );
    });

    const dots = this.props.data.map((_, i) => {
      const dotClass = classnames(styles.dot, {
        [styles.active]: this.state.slideIndex === i
      });

      return <a key={i} className={dotClass} onClick={() => this.setCurrentSlide(i)} />;
    });

    return (
      <div className={styles.slideshow}>
        <div className={styles.slideshowContainer}>
          {slides}

          <a className={styles.prev} onClick={this.prevSlide}>&#10094;</a>
          <a className={styles.next} onClick={this.nextSlide}>&#10095;</a>
        </div>
        <div style={{ textAlign: 'center' }}>
          {dots}
        </div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      img: React.PropTypes.string,
      caption: React.PropTypes.string
    })).isRequired
};

export default Slideshow;
