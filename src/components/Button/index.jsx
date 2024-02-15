import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[32px]" };
const variants = {
  fill: {
    light_blue_A700_26: "bg-light_blue-A700_26 text-light_blue-A700",
    amber_500: "bg-amber-500 text-black-900",
  },
};
const sizes = { xs: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "amber_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["light_blue_A700_26", "amber_500"]),
};

export { Button };
