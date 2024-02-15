import React from "react";

import { Img, Text } from "components";

const MainCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[202px] sm:h-auto object-cover w-full"
          alt="rectangleten"
          src={props?.image}
        />
        <div className="bg-gray-200 flex flex-col items-center justify-start p-[15px] w-full">
          <div className="flex flex-col items-start justify-start mb-4 w-[96%] md:w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtMarkaziTextMedium24"
              >
                {props?.languagetext}
              </Text>
              <Text
                className="text-base text-deep_orange-A100"
                size="txtKarlaBold16"
              >
                {props?.pricetext}
              </Text>
            </div>
            <Text
              className="mt-[27px] text-base text-blue_gray-700 w-[98%] sm:w-full"
              size="txtKarlaRegular16"
            >
              {props?.descriptiontext}
            </Text>
            <div className="flex flex-row items-start justify-start mt-[21px] w-[67%] md:w-full">
              <Text
                className="text-base text-blue_gray-900"
                size="txtKarlaBold16Bluegray900"
              >
                {props?.orderdeliverytext}
              </Text>
              <Img
                className="h-[11px] ml-[3px] mt-0.5"
                src="images/img_group.svg"
                alt="group"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainCard.defaultProps = {
  image: "images/img_rectangle10.png",
  languagetext: "Greek salad",
  pricetext: "$12.99",
  descriptiontext:
    "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  orderdeliverytext: "Order a delivery",
};

export default MainCard;
