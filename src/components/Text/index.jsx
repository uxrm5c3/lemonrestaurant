import React from "react";

const sizeClasses = {
  txtKarlaExtraBold20Black900: "font-extrabold font-karla",
  txtKarlaRegular14: "font-karla font-normal",
  txtKarlaBold14: "font-bold font-karla",
  txtKarlaMedium40: "font-karla font-medium",
  txtMarkaziTextMedium24: "font-markazitext font-medium",
  txtKarlaBold16: "font-bold font-karla",
  txtKarlaMedium20: "font-karla font-medium",
  txtKarlaRegular60: "font-karla font-normal",
  txtKarlaMedium20Black900: "font-karla font-medium",
  txtKarlaMedium20Gray900: "font-karla font-medium",
  txtKarlaExtraBold20Bluegray700: "font-extrabold font-karla",
  txtKarlaBold16Bluegray900: "font-bold font-karla",
  txtKarlaRegular16: "font-karla font-normal",
  txtRobotoMedium56: "font-medium font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtKarlaExtraBold20: "font-extrabold font-karla",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
