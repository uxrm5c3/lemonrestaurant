import React from "react";

import { Button, Img, List, Text } from "components";
import MainCard from "components/MainCard";
import MainLinks from "components/MainLinks";

const MainPage = () => {
  const mainCardPropList = [
    {},
    {
      languagetext: "Bruchetta",
      descriptiontext:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      pricetext: "$ 5.99",
      image: "images/img_rectangle10_202x248.png",
    },
    {
      languagetext: "Lemon Dessert",
      descriptiontext:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      pricetext: "$ 5.00",
      image: "images/img_rectangle10_1.png",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-karla items-center justify-end mx-auto pt-[63px] w-full">
        <div className="sm:h-[2821px] h-[2823px] md:h-[2886px] md:px-5 relative w-full">
          <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-end justify-start left-[0] my-auto p-[5px] w-[91%]">
            <div className="flex md:flex-col flex-row gap-[39px] items-center justify-end mb-[2714px] mt-[21px] w-[90%] md:w-full">
              <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start p-2 w-[22%] md:w-full">
                <Img
                  className="h-[60px] md:h-auto object-cover w-[99%]"
                  src="images/img_vector.png"
                  alt="vector"
                />
              </div>
              <MainLinks className="flex sm:flex-col flex-row gap-7 items-start justify-start w-[591px] sm:w-full" />
            </div>
          </div>
          <div className="absolute bottom-[0] h-[411px] md:h-[417px] inset-x-[0] mx-auto w-full">
            <div className="h-[417px] m-auto w-full">
              <Img
                className="absolute h-[417px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle20.png"
                alt="rectangletwenty"
              />
              <div className="absolute bg-gray-400 border border-black-900 border-solid h-[278px] inset-y-[0] left-[6%] my-auto w-[12%]"></div>
              <Img
                className="absolute h-[290px] inset-y-[0] left-[4%] my-auto"
                src="images/img_group20.svg"
                alt="grouptwenty"
              />
              <div className="absolute flex sm:flex-col flex-row sm:gap-10 gap-[104px] h-max inset-y-[0] items-start justify-center my-auto right-[18%] w-[58%]">
                <div className="flex flex-col gap-[15px] justify-start">
                  <Text
                    className="md:ml-[0] ml-[137px] text-deep_orange-A100 text-xl w-[49%] sm:w-full"
                    size="txtKarlaExtraBold20"
                  >
                    Doormat Navigation
                  </Text>
                  <Text
                    className="leading-[130.00%] mr-[108px] text-white-A700 text-xl"
                    size="txtKarlaMedium20"
                  >
                    <>
                      Home
                      <br />
                      About
                      <br />
                      menu
                      <br />
                      Reservations
                      <br />
                      Order Online
                      <br />
                      Login
                      <br />
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-[37%] sm:w-full">
                  <Text
                    className="text-deep_orange-A100 text-xl"
                    size="txtKarlaExtraBold20"
                  >
                    Contact
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="leading-[130.00%] text-white-A700 text-xl"
                      size="txtKarlaMedium20"
                    >
                      <>
                        Adress
                        <br />
                        phone number
                        <br />
                        email
                        <br />
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute bottom-[26%] leading-[130.00%] right-[26%] text-white-A700 text-xl"
              size="txtKarlaMedium20"
            >
              <>
                Adress
                <br />
                phone number
                <br />
                email
                <br />
              </>
            </Text>
            <Text
              className="absolute right-[0] text-blue_gray-700 text-xl top-[23%]"
              size="txtKarlaExtraBold20Bluegray700"
            >
              Social M edia Links
            </Text>
          </div>
          <div className="absolute flex flex-col items-center justify-start right-[7%] top-[22%] w-[81%]">
            <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[90%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtKarlaMedium40"
                >
                  Specials
                </Text>
                <Button
                  className="cursor-pointer font-roboto leading-[normal] min-w-[187px] text-center text-lg"
                  shape="round"
                >
                  Online Menu
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                {mainCardPropList.map((props, index) => (
                  <React.Fragment key={`MainCard${index}`}>
                    <MainCard
                      className="flex flex-1 flex-col items-center justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="absolute bg-blue_gray-700 font-roboto md:h-[330px] h-[406px] inset-x-[0] mx-auto p-7 sm:px-5 top-[4%] w-full">
            <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[13%] w-[43%]">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-[95%] sm:w-full"
                size="txtRobotoMedium56"
              >
                <span className="text-amber-500 font-roboto text-left font-medium">
                  Little Lemon{" "}
                </span>
                <span className="md:text-3xl sm:text-[28px] text-white-A700 font-markazitext text-left text-[32px] font-normal">
                  Chicago
                </span>
              </Text>
              <Text
                className="mt-[15px] text-white-A700 text-xl w-full"
                size="txtRobotoRegular20"
              >
                We are a family owned Mediterranean restaurant focused on
                traditional recipes served with a modern twist
              </Text>
              <Button
                className="cursor-pointer leading-[normal] min-w-[200px] mt-[66px] rounded-[30px] text-center text-lg"
                shape="round"
              >
                Reserve a Table
              </Button>
            </div>
            <Img
              className="absolute h-[325px] inset-y-[0] my-auto object-cover right-[10%] w-[38%]"
              src="images/img_rectangle45.png"
              alt="rectanglefortyf"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
