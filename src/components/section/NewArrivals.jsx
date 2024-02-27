import React, { useRef } from "react";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import ProductCard from "../layout/ProductCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { newarrivals } from "../../Demo Data/ProductCategoryData";

const NewArrivals = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-10 sm:pt-14 md:pt-18 lg:pt-22 xl:pt-28 2xl:pt-32">
      <Container className={"relative"}>
        <Heading
          tagname="h1"
          text="New Arrivals"
          className="font-bold font-dm-sans text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] capitalize pb-3 sm:pb-5 md:pb-8 lg:pb-10 2xl:pb-12"
        />
        <div className="slider-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {newarrivals.map((item , index) => (
              <div>
                <ProductCard
                  className={
                    "w-full sm:w-[305px] md:w-[340px] lg:w-[300px] xl:w-[370px]"
                  }
                  key={index}
                  productImageLink={item.productImageSrc}
                  tag={item.badgeText}
                  tagVisibility={item.badge}
                  productName={item.productName}
                  productPrice={item.productPrice}
                  productColor={item.productColor}
                />
              </div>
            ))}
          </Slider>
          <button
            className="absolute py-2.5 px-2.5 lg:py-5 lg:px-5 rounded-full left-1 bg-[#979797] button top-2/4"
            onClick={previous}
          >
            <FaArrowLeft className="text-white text-[12px] lg:text-[16px]" />
          </button>
          <button
            className="absolute py-2.5 px-2.5 lg:py-5 lg:px-5 rounded-full right-4 lg:right-2 bg-[#979797] button top-2/4"
            onClick={next}
          >
            <FaArrowRight className="text-white text-[12px] lg:text-[16px]" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
