import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Paragraph from "../layout/Paragraph";
import Input from "../layout/Input";
import Button from "../layout/Button";
import Image from "../layout/Image";
import Heading from "../layout/Heading";
// react icons
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaSearch, FaUser } from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
// image
import headphoneImage from "../../../public/assets/headphone.png";
import capImage from "../../../public/assets/cap.png";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Header = () => {
  return (
    <section className="bg-[#f5f5f3] py-3 sm:py-4 md:py-5 lg:py-6">
      <Container>
        <Flex className="items-center justify-between">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen}>
                  <Button
                    className="flex items-center gap-x-1 md:gap-x-2.5 font-dm-sans text-sm capitalize"
                    text={
                      <span className="hidden sm:inline-block text-sm md:text-base  lg:text-lg">
                        shop by category
                      </span>
                    }
                    iconAlighnment={"left"}
                    icon={
                      isOpen ? (
                        <RxCross2 className="sm:text-sm md:text-base lg:text-lg" />
                      ) : (
                        <RiBarChartHorizontalLine className="sm:text-sm md:text-base lg:text-lg" />
                      )
                    }
                  />
                </MenuButton>
                <MenuList
                  className={`[&>*:nth-last-child(1)]:border-none w-[200px] sm:w-[230px] md:w-[263px] font-dm-sans capitalize bg-primary-color text-white !z-20`}
                >
                  <MenuItem
                    className={
                      " py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px] capitalize"
                    }
                  >
                    accesories
                  </MenuItem>
                  <MenuItem
                    className={
                      " py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px] capitalize"
                    }
                  >
                    furniture
                  </MenuItem>
                  <MenuItem
                    className={
                      " py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px] capitalize"
                    }
                  >
                    electronics
                  </MenuItem>
                  <MenuItem
                    className={
                      " py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px] capitalize"
                    }
                  >
                    clothes
                  </MenuItem>
                  <MenuItem
                    className={
                      " py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px] capitalize"
                    }
                  >
                    bags
                  </MenuItem>
                  <MenuItem
                    className={
                      " py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px] capitalize"
                    }
                  >
                    home appliances
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>

          <div className="search-box w-[180px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[600px] bg-white rounded relative">
            <Input
              type={"text"}
              placeholder={"search products"}
              className={
                "w-full py-1 sm:py-2.5 md:py-3 pl-2.5 md:pl-5 pr-[28px] md:pr-[53px] lg:pr-[54px] placeholder:text-xs md:placeholder:text-base md:text-base text-xs placeholder:text-[#C4C4C4] font-dm-sans capitalize"
              }
            />
            <Button
              text={<FaSearch className="text-xs md:text-lg" />}
              className={
                " absolute right-0 top-0 py-2 sm:py-3 px-2 md:py-[16px] md:px-[18px]"
              }
            />
          </div>

          <div className="account-and-cart-icons">
            <Flex
              className={"flex items-center gap-x-3 md:gap-x-4 lg:gap-x-10"}
            >
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen}>
                      <Button
                        className={"flex justify-center gap-x-[2px] sm:gap-x-1"}
                        text={
                          <FaUser
                            className={
                              "xl:text-xl text-sm md:text-base  lg:text-lg"
                            }
                          />
                        }
                        iconAlighnment={"right"}
                        icon={
                          isOpen ? (
                            <GoTriangleUp className="sm:text-sm md:text-base lg:text-lg" />
                          ) : (
                            <GoTriangleDown className="sm:text-sm md:text-base lg:text-lg" />
                          )
                        }
                      />
                    </MenuButton>
                    <MenuList
                      className={
                        "w-[150px] md:w-[200px] font-dm-sans capitalize  bg-white border absolute top-1 right-0 translate-x-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] [&>*:last-child]:border-none"
                      }
                    >
                      <MenuItem>
                        <Link
                          to={"/my-account"}
                          className={
                            "px-3 sm:px-4 py-2.5 w-full md:py-4 text-sm md:text-base md:px-5 border-b-[1px] ease-in duration-200 text-primary-color hover:bg-primary-color hover:text-white capitalize"
                          }
                        >
                          my account
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to={"/login"}
                          className={
                            "px-3 sm:px-4 py-2.5 w-full md:py-4 text-sm md:text-base md:px-5 border-b-[1px] ease-in duration-200 text-primary-color hover:bg-primary-color hover:text-white capitalize"
                          }
                        >
                          log Out
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen}>
                      <Button
                      className={"flex items-center"}
                        iconAlighnment={"right"}
                        icon={
                          isOpen ? (
                            <RxCross2 className="xl:text-xl text-sm md:text-base lg:text-lg" />
                          ) : (
                            <FaCartShopping className="xl:text-xl text-sm md:text-base lg:text-lg" />
                          )
                        }
                      />
                    </MenuButton>
                    <MenuList
                      className={`cart-box w-[280px] sm:w-[360px] [&>*:nth-last-child(1)]:border-none bg-white border border-white right-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}
                    >
                      <MenuItem className="w-full flex justify-between bg-[#f5f5f5] border-b-2 border-white p-5">
                        <div className="flex items-center w-10/12 item-information gap-x-2 sm:gap-x-5">
                          <picture className="item-images">
                            <Image
                              imageLink={headphoneImage}
                              altText={"cart-item"}
                              className={"w-14 sm:w-20"}
                            />
                          </picture>
                          <div className="text-sm font-bold font-dm-sans">
                            <Heading
                              tagname="h3"
                              text="Apple Headphone"
                              className="mb-1 sm:mb-2 text-xs sm:text-[14px] leading-5"
                            />
                            <Paragraph
                              text={"$44.00"}
                              classname={"text-xs sm:text-[14px] leading-5"}
                            />
                          </div>
                        </div>
                        <Button text={<RxCross2 className="sm:text-2xl" />} />
                      </MenuItem>
                      <MenuItem className="w-full flex justify-between bg-[#f5f5f5] border-b-2 border-white p-5">
                        <div className="flex items-center w-10/12 item-information gap-x-2 sm:gap-x-5">
                          <picture className="item-images">
                            <Image
                              imageLink={capImage}
                              altText={"cart-item"}
                              className={"w-14 sm:w-20"}
                            />
                          </picture>
                          <div className="text-sm font-bold font-dm-sans">
                            <Heading
                              tagname="h3"
                              text="Primium Cap"
                              className="mb-1 sm:mb-2 text-xs sm:text-[14px] leading-5"
                            />
                            <Paragraph
                              text={"$30.00"}
                              classname={"text-xs sm:text-[14px] leading-5"}
                            />
                          </div>
                        </div>
                        <Button text={<RxCross2 className="sm:text-2xl" />} />
                      </MenuItem>
                      <div className="px-5 pt-4 pb-5 total-price">
                        <Heading
                          tagname="h4"
                          text={[
                            <span className="text-[#767676]">Subtotal:</span>,
                            " $74.00",
                          ]}
                          className=" font-dm-sans font-bold text-xs sm:text-[16px]"
                        />
                        <Flex className="justify-between buttons mt-3">
                          <Link
                            to={"/cart"}
                            className="py-2 sm:py-3 px-5 sm:px-9 border border-[#2B2B2B] text-black font-dm-sans text-sm sm:text-base sm:leading-6 font-bold capitalize"
                          >
                            view card
                          </Link>
                          <Link
                            to={"/checkout"}
                            className="py-2 sm:py-3 px-5 sm:px-9 border border-[#2B2B2B] bg-black text-white font-dm-sans text-sm sm:text-base sm:leading-6 font-bold capitalize"
                          >
                            checkout
                          </Link>
                        </Flex>
                      </div>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // components
// import Container from "../layout/Container";
// import Flex from "../layout/Flex";
// import Paragraph from "../layout/Paragraph";
// import Input from "../layout/Input";
// import Button from "../layout/Button";
// import List from "../layout/List";
// import ListItem from "../layout/ListItem";
// import Image from "../layout/Image";
// import Heading from "../layout/Heading";
// // react icons
// import { RiBarChartHorizontalLine } from "react-icons/ri";
// import { FaSearch, FaUser } from "react-icons/fa";
// import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
// import { FaCartShopping } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// // image
// import headphoneImage from "../../../public/assets/headphone.png";
// import capImage from "../../../public/assets/cap.png";

// import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

// const Header = () => {
//   const [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
//   const [accountDropDownShow, setAccountDropDownShow] = useState(false);
//   const [cartDropDownShow, setCartDropDownShow] = useState(false);

//   return (
//     <section className="bg-[#f5f5f3] py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8">
//       <Container>
//         <Flex className="items-center justify-between">
//           /
//           <div className="relative">
//             <Button
//               onClick={() => setCategoryDropDownShow(!categoryDropDownShow)}
//               className="flex items-center gap-x-1 md:gap-x-2.5 font-dm-sans text-sm capitalize"
//               text={
//                 <span className="hidden sm:inline-block text-sm md:text-base  lg:text-lg">
//                   shop by category
//                 </span>
//               }
//               iconAlighnment={"left"}
//               icon={
//                 categoryDropDownShow ? (
//                   <RxCross2 className="sm:text-sm md:text-base lg:text-lg" />
//                 ) : (
//                   <RiBarChartHorizontalLine className="sm:text-sm md:text-base lg:text-lg" />
//                 )
//               }
//             />
//             <List
//               className={`[&>*:nth-last-child(1)]:border-none w-[200px] sm:w-[230px] md:w-[263px] font-dm-sans capitalize bg-primary-color text-white absolute top-10 left-0 transition-all duration-300 !z-20 ${categoryDropDownShow ? " translate-x-0 lg:scale-100" : " -translate-x-[150%] lg:translate-x-0 lg:scale-0"}`}
//             >
//               <ListItem
//                 className={
//                   " py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px]"
//                 }
//               >
//                 accesories
//               </ListItem>
//               <ListItem
//                 className={
//                   "py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px]"
//                 }
//               >
//                 furniture
//               </ListItem>
//               <ListItem
//                 className={
//                   "py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px]"
//                 }
//               >
//                 electronics
//               </ListItem>
//               <ListItem
//                 className={
//                   "py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px]"
//                 }
//               >
//                 clothes
//               </ListItem>
//               <ListItem
//                 className={
//                   "py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px]"
//                 }
//               >
//                 bags
//               </ListItem>
//               <ListItem
//                 className={
//                   "py-3 md:py-4 px-5 text-[15px] border-b-[1px] border-gray-500 ease-in duration-200 opacity-75 hover:opacity-100 hover:text-white hover:pl-[25px]"
//                 }
//               >
//                 home appliances
//               </ListItem>
//             </List>
//           </div>
//           <div className="search-box w-[180px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[600px] bg-white rounded relative">
//             <Input
//               type={"text"}
//               placeholder={"search products"}
//               className={
//                 "w-full py-1 sm:py-2.5 md:py-3 pl-2.5 md:pl-5 pr-[28px] md:pr-[53px] lg:pr-[54px] placeholder:text-xs md:placeholder:text-base md:text-base text-xs placeholder:text-[#C4C4C4] font-dm-sans capitalize"
//               }
//             />
//             <Button
//               text={<FaSearch className="text-xs md:text-lg" />}
//               className={
//                 " absolute right-0 top-0 py-2 sm:py-3 px-2 md:py-[16px] md:px-[18px]"
//               }
//             />
//           </div>

//           <div className="account-and-cart-icons">
//             <Flex
//               className={"flex items-center gap-x-3 md:gap-x-4 lg:gap-x-10"}
//             >

//               <div className={"relative z-10"}>
//                 <Button
//                   onClick={() => setAccountDropDownShow(!accountDropDownShow)}
//                   className={"flex justify-center gap-x-[2px] sm:gap-x-1"}
//                   text={<FaUser className="text-sm md:text-base lg:text-lg" />}
//                   icon={
//                     <GoTriangleDown
//                       className={`xl:text-xl text-sm md:text-base  lg:text-lg transition duration-[.4s] ${accountDropDownShow ? "-rotate-180" : "rotate-0"}`}
//                     />
//                   }
//                   iconAlighnment={"right"}
//                 />
//                 {accountDropDownShow && (
//                   <List
//                     className={
//                       "w-[150px] md:w-[200px] group font-dm-sans capitalize text-center bg-white border text-[#ada8a8] absolute top-6 sm:top-8 md:top-10 right-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
//                     }
//                   >
//                     <ListItem
//                       className={
//                         " py-2.5 md:py-4 text-sm md:text-base md:px-5 border-b-[1px] ease-in duration-200 text-primary-color hover:bg-primary-color hover:text-white"
//                       }
//                     >
//                       <Link to={"/my-account"}>my account</Link>
//                     </ListItem>
//                     <ListItem
//                       className={
//                         " py-2.5 md:py-4 text-sm md:text-base md:px-5 border-b-[1px] ease-in duration-200 text-primary-color hover:bg-primary-color hover:text-white"
//                       }
//                     >
//                       <Link to={"/login"}>log out</Link>
//                     </ListItem>
//                   </List>
//                 )}
//               </div>

//               <div className={"relative z-10"}>
//                 <Button
//                   onClick={() => setCartDropDownShow(!cartDropDownShow)}
//                   text={
//                     cartDropDownShow ? (
//                       <RxCross2 className="xl:text-xl text-sm md:text-base lg:text-lg" />
//                     ) : (
//                       <FaCartShopping className="xl:text-xl text-sm md:text-base lg:text-lg" />
//                     )
//                   }
//                 />
//                 <div
//                   className={`cart-box w-[280px] sm:w-[360px] [&>*:nth-last-child(1)]:border-none bg-white border border-white absolute  top-7 sm:top-8 md:top-10 right-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all duration-300 ${cartDropDownShow ? " scale-100" : "scale-0"}`}
//                 >
//                   <div className="w-full flex justify-between bg-[#f5f5f5] border-b-2 border-white p-5">
//                     <div className="flex items-center w-10/12 item-information gap-x-2 sm:gap-x-5">
//                       <div className="item-images">
//                         <Image
//                           imageLink={headphoneImage}
//                           altText={"cart-item"}
//                           className={"w-14 sm:w-20"}
//                         />
//                       </div>
//                       <div className="text-sm font-bold font-dm-sans">
//                         <Heading
//                           tagname="h3"
//                           text="Apple Headphone"
//                           className="mb-1 sm:mb-2 text-xs sm:text-[14px] leading-5"
//                         />
//                         <Paragraph
//                           text={"$44.00"}
//                           classname={"text-xs sm:text-[14px] leading-5"}
//                         />
//                       </div>
//                     </div>
//                     <Button text={<RxCross2 className="sm:text-2xl" />} />
//                   </div>
//                   <div className="w-full flex justify-between bg-[#f5f5f5] border-b border-white p-5">
//                     <div className="flex items-center w-10/12 item-information gap-x-5">
//                       <div className="item-images">
//                         <Image
//                           imageLink={capImage}
//                           altText={"cart-item"}
//                           className={"w-14 sm:w-20"}
//                         />
//                       </div>
//                       <div className="text-sm font-bold font-dm-sans">
//                         <Heading
//                           tagname="h3"
//                           text="Primium Cap"
//                           className="mb-1 sm:mb-2 text-xs sm:text-[14px] leading-5"
//                         />
//                         <Paragraph
//                           text={"$30.00"}
//                           classname={"text-xs sm:text-[14px] leading-5"}
//                         />
//                       </div>
//                     </div>
//                     <Button text={<RxCross2 className="sm:text-2xl" />} />
//                   </div>
//                   <div className="px-5 pt-4 pb-5 total-price">
//                     <Heading
//                       tagname="h4"
//                       text={[
//                         <span className="text-[#767676]">Subtotal:</span>,
//                         " $74.00",
//                       ]}
//                       className=" font-dm-sans font-bold text-xs sm:text-[16px]"
//                     />
//                     <div className="flex justify-between buttons">
//                       <Link
//                         to={"#"}
//                         className="py-2 sm:py-3 px-5 sm:px-9 mt-3 border border-[#2B2B2B] text-black font-dm-sans text-sm sm:text-base sm:leading-6 font-bold capitalize"
//                       >
//                         view card
//                       </Link>
//                       <Link
//                         to={"#"}
//                         className="py-2 sm:py-3 px-5 sm:px-9 mt-3 border border-[#2B2B2B] bg-black text-white font-dm-sans text-sm sm:text-base sm:leading-6 font-bold capitalize"
//                       >
//                         checkout
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Flex>
//           </div>
//         </Flex>
//       </Container>
//     </section>
//   );
// };

// export default Header;
