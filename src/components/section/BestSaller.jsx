import React from "react";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import Flex from "../layout/Flex";
import ProductCard from "../layout/ProductCard";
import { bestsaller } from "../../Demo Data/ProductCategoryData";

const BestSaller = () => {
  return (
    <section className="pt-10 sm:pt-14 md:pt-18 lg:pt-23 xl:pt-28 2xl:pt-32">
      <Container>
        <Heading
          tagname="h1"
          text="Best Saller"
          className="font-bold font-dm-sans text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] capitalize pb-3 sm:pb-5 md:pb-8 lg:pb-10 2xl:pb-12"
        />
        <Flex className={"justify-between flex-wrap"}>
          {bestsaller.map((item, index) => (
            <ProductCard
              key={index}
              className="mb-4 w-full sm:w-[310px] md:w-[340px] lg:w-[300px] xl:w-[370px]"
              productImageLink={item.productImageSrc}
              tag={item.badgeText}
              tagVisibility={item.badge}
              productName={item.productName}
              productPrice={item.productPrice}
              productColor={item.productColor}
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default BestSaller;
