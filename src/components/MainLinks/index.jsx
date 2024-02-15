import React from "react";

import { Text } from "components";

const MainLinks = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="capitalize text-black-900 text-xl w-auto"
          size="txtKarlaMedium20Black900"
        >
          {props?.hometext}
        </Text>
        <Text
          className="capitalize text-black-900 text-xl w-auto"
          size="txtKarlaMedium20Black900"
        >
          {props?.abouttext}
        </Text>
        <Text
          className="capitalize text-black-900 text-xl w-auto"
          size="txtKarlaMedium20Black900"
        >
          {props?.menutext}
        </Text>
        <Text
          className="capitalize text-black-900 text-xl w-auto"
          size="txtKarlaMedium20Black900"
        >
          {props?.reservationstext}
        </Text>
        <Text
          className="capitalize text-black-900 text-xl w-auto"
          size="txtKarlaMedium20Black900"
        >
          {props?.orderonlinetext}
        </Text>
        <Text
          className="capitalize text-gray-900 text-xl w-auto"
          size="txtKarlaMedium20Gray900"
        >
          {props?.logintext}
        </Text>
      </div>
    </>
  );
};

MainLinks.defaultProps = {
  hometext: "Home",
  abouttext: "About",
  menutext: "menu",
  reservationstext: "reservations",
  orderonlinetext: "order online",
  logintext: "login",
};

export default MainLinks;
