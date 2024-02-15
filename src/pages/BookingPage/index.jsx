import React from "react";

import { Button, Img, Text } from "components";

const BookingPagePage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-karla items-start justify-start mx-auto p-[7px] w-full">
        <Text
          className="md:ml-[0] ml-[196px] md:text-5xl text-6xl text-black-900"
          size="txtKarlaRegular60"
        >
          Book Your Dinner
        </Text>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[194px] mt-[98px] md:px-5 w-[410px] sm:w-full">
          <Text
            className="text-black-900 text-xl w-auto"
            size="txtKarlaExtraBold20Black900"
          >
            Name
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[194px] mt-[118px] text-black-900 text-xl"
          size="txtKarlaExtraBold20Black900"
        >
          Email
        </Text>
        <Text
          className="md:ml-[0] ml-[194px] mt-[98px] text-black-900 text-xl"
          size="txtKarlaExtraBold20Black900"
        >
          Reserve your time
        </Text>
        <Text
          className="md:ml-[0] ml-[206px] mt-[363px] text-black-900 text-xl"
          size="txtKarlaExtraBold20Black900"
        >
          No of Pax
        </Text>
        <div className="flex flex-col font-abel items-end mb-[109px] md:ml-[0] ml-[194px] mt-[329px] pl-[410px] md:px-5 w-[66%] md:w-full">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[239px] rounded-[10px]"
            leftIcon={
              <Img
                className="mb-px mr-2.5"
                src="images/img_save.svg"
                alt="save"
              />
            }
            color="light_blue_A700_26"
          >
            <div className="text-[17px] text-center tracking-[-0.41px]">
              Submit
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default BookingPagePage;
