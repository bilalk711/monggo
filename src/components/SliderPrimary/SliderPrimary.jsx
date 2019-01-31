import React, { Component } from "react";
import { Carousel, Row, Col, Icon } from "antd";
import "sass/style.sass";
import serviceCategory from "api/services/ServiceCategory";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} style={{ marginRight: "30px", zIndex: "1" }}>
      <Icon
        type="right"
        style={{ color: "#bdc3c7", fontSize: "30px" }}
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} style={{ marginLeft: "30px", zIndex: "1" }}>
      <Icon
        type="left"
        style={{ color: "#bdc3c7", fontSize: "30px" }}
        onClick={onClick}
      />
    </div>
  );
}

class SliderPrimary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsSlider: []
    };
  }

  componentWillMount() {
    this.sliderHome();
  }

  sliderHome = () => {
    serviceCategory
      .SliderHome()
      .then(response => {
        const productsSlider = response.data;
        this.setState({
          productsSlider: productsSlider
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <div
          style={{
            // backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      )
      // customPaging: () => (
      //   <div
      //     style={{
      //       width: "10px",
      //       // color: "blue",
      //       border: "1px blue solid"
      //     }}
      //   >
      //     {/* {i + 1} */}
      //   </div>
      // )
    };
    // const { productsSlider } = this.state;
    const items = [];
    const slides = this.state.productsSlider.map((productSlider,Index) => {
      items.push({
        src: productSlider.imageUrl
      });
      return (
        <React.Fragment  key={productSlider.id}>
          <a href={productSlider.url}>
          <img src={productSlider.imageUrl} alt={productSlider.type}  />
          </a>
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        <div className="container" style={{marginTop:"111px"}}>
          <Row justify='center'>
            <Col md={24}>
              <Carousel autoplay {...settings}>
                {slides}
              </Carousel>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default SliderPrimary;
