import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      active: 0
    };
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  //manage the state income from props income
  static getDerivedStateFromProps({ media }) {
    let images = ["http://placecorgi.com/600/600"];
    if (media.length) {
      images = media.map(({ large }) => large);
    }
    return { images };
  }

  handleIndexClick(e) {
    this.setState({
      // (+) to set the str. to number of data-index in the DOM
      active: +e.target.dataset.index
    });
  }

  render() {
    const { images, active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="pet" />
        <div className="carousel-smaller">
          {images.map((url, i) => {
            return (
              //eslint-disable-next-line
              <img
                src={url}
                key={i}
                data-index={i}
                onClick={this.handleIndexClick}
                className={i ? active : "active"}
                alt="Picture"
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Carousel;
