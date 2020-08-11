import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";

import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";
import logo1 from '../images/Huron.jpg'
import logo2 from '../images/western.jpg'


const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
    style={{ width: "200px" }}
  >
   {/* // concat("/200x200&text=Matthew&fontsize=32") */}
    <Slider>
      <CustomCardSlide
        image={logo1}
        index={0}
        header="Huron"
      />
      <CustomCardSlide
        header="Western"
        image={logo1}
        index={1}
      
      />
      <CustomCardSlide
        header="Kings"
        image={logo1}
        index={2}
      />
    </Slider>

    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default CardCarousel;
