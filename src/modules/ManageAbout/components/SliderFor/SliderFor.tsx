import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

function SimpleSlider() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugiat
            asperiores sit modi, provident magnam dolorem quia quos. Eligendi
            sequi deserunt suscipit molestias sapiente vitae commodi. Ad explicabo
            obcaecati fugiat?
          </h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
