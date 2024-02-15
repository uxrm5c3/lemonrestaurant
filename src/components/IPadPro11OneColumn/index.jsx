import React from "react";

import { Line, Text } from "components";

const IPadPro11OneColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mt-[21px] w-[87%] md:w-full">
          <Text className="text-black-900 text-sm" size="txtKarlaBold14">
            {props?.ratingtext}
          </Text>
          <div className="flex flex-row gap-3 items-center justify-start mt-[13px] w-[63%] md:w-full">
            <div className="h-[46px] relative w-[49%]">
              <div className="bg-blue_gray-100 border border-black-900 border-solid h-[46px] m-auto w-[47px]"></div>
              <div className="absolute h-[46px] inset-[0] justify-center m-auto w-full">
                <Line className="bg-black-900 h-px m-auto rotate-[-44deg] w-full" />
                <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto rotate-[46deg] w-[92%]" />
              </div>
            </div>
            <Text className="text-black-900 text-sm" size="txtKarlaBold14">
              {props?.nametext}
            </Text>
          </div>
          <Text
            className="mt-[17px] text-black-900 text-sm w-full"
            size="txtKarlaRegular14"
          >
            {props?.reviewtext}
          </Text>
        </div>
      </div>
    </>
  );
};

IPadPro11OneColumn.defaultProps = {
  ratingtext: "Rating",
  nametext: "Name",
  reviewtext: "Review rext",
};

export default IPadPro11OneColumn;
