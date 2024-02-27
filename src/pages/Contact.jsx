import React, { useState } from "react";
import Container from "../components/layout/Container";
import BreadCrump from "../components/layout/BreadCrump";
import Heading from "../components/layout/Heading";
import InputBox from "../components/layout/InputBox";
import Textarea from "../components/layout/Textarea";
import CusButton from "../components/layout/CusButton";
import List from "../components/layout/List";
import ListItem from "../components/layout/ListItem";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Contact = () => {
  const [country, setCountry] = useState("Lithuania");

  return (
    <section>
      <Container>
        <BreadCrump />
        <form
          action=""
          className=" mt-4 sm:mt-7 md:mt-10 lg:mt-13 xl:mt-16 w-full sm:w-3/4 md:w-4/6 lg:w-2/4 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
        >
          <Heading
            tagname={"h3"}
            text={"Fill up a Form"}
            className=" font-dm-sans font-bold text-primary-color text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-7"
          />
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8"}
            labelText="name"
            id={"name"}
            type="text"
            placeholder="Your name here"
          />
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8"}
            labelText="email"
            id={"email"}
            type="text"
            placeholder="Your email here"
          />
          <Textarea
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8"}
            labelText="messege"
            id={"messege"}
            placeholder={"Your mesege here"}
          />
          <CusButton text={"Post"} />
        </form>
        <div className="map relative">
          {country == "Germany" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1031.9511191698007!2d90.42514918160967!3d23.78305362310217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7292b9ea7fd%3A0x723922bd5147b52c!2sGermany%20Visa%20Application%20Center!5e0!3m2!1sen!2sbd!4v1708744912062!5m2!1sen!2sbd"
              frameborder="0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[450px] lg:h-[550px] 2x:h-[600px] rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            ></iframe>
          )}
          {country == "Slovakia" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.7587310046433!2d17.53198807615311!3d48.01837097123046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b799c8a158591%3A0xac2abd05c1a08cfd!2zU2xvdmFraWEgcmluZyBvcmVjaG92w6EgcG90dsO0xYg!5e0!3m2!1sen!2sbd!4v1708745287418!5m2!1sen!2sbd"
              frameborder="0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[450px] lg:h-[550px] 2x:h-[600px] rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            ></iframe>
          )}
          {country == "Lithuania" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.121463355251!2d25.266385076587312!3d54.68989017270932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9408c683b0ef%3A0x72428a2b34b41d8e!2sLithuanian%20Ministry%20of%20Foreign%20Affairs!5e0!3m2!1sen!2sbd!4v1708745613620!5m2!1sen!2sbd"
              frameborder="0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[450px] lg:h-[550px] 2x:h-[600px] rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            ></iframe>
          )}
          <div className="office-information mt-5 md:mt-0 md:w-[250px] lg:w-[350px] xl:w-[450px] md:absolute md:top-2/4 md:left-10 lg:left-20 md:-translate-y-2/4">
            <Accordion
              defaultIndex={2}
              className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] [&>*:last-child]:border-none"
              allowToggle
            >
              <AccordionItem
                className="bg-white border-b-[1px] border-[#F0F0F0]"
                onClick={() => setCountry("Germany")}
              >
                <AccordionButton className="flex justify-between px-5 py-2.5 sm:py-3 lg:py-5">
                  <Heading
                    tagname="h4"
                    text="Germany Office"
                    className=" font-dm-sans font-semibold text-base sm:text-lg lg:text-[20px]"
                  />
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <List className={"mb-2.5"}>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      575 Crescent Ave. Quakertown, PA 18951
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      +432 533 12 523
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      info@domain.com
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      Mon - Fri: 9am - 6pm
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                onClick={() => setCountry("Slovakia")}
                className="bg-white border-b-[1px] border-[#F0F0F0]"
              >
                <AccordionButton className="flex justify-between px-5 py-2.5 sm:py-3 lg:py-5">
                  <Heading
                    tagname="h4"
                    text="Slovakia Office"
                    className=" font-dm-sans font-semibold text-base sm:text-lg lg:text-[20px]"
                  />
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <List className={"mb-2.5"}>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      575 Crescent Ave. Quakertown, PA 18951
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      +432 533 12 523
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      info@domain.com
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      Mon - Fri: 9am - 6pm
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                onClick={() => setCountry("Lithuania")}
                className="bg-white border-b-[1px] border-[#F0F0F0]"
              >
                <AccordionButton className="flex justify-between px-5 py-2.5 sm:py-3 lg:py-5">
                  <Heading
                    tagname="h4"
                    text="Lithuania Office"
                    className=" font-dm-sans font-semibold text-base sm:text-lg lg:text-[20px]"
                  />
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <List className={"mb-2.5"}>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      575 Crescent Ave. Quakertown, PA 18951
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      +432 533 12 523
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      info@domain.com
                    </ListItem>
                    <ListItem
                      className={
                        "font-dm-sans text-secondary-color text-xs sm:text-[14px] md:text-xs lg:text-[16px]  lg:leading-[24px] pb-2 sm:pb-3 md:pb-2 lg:pb-5 px-5"
                      }
                    >
                      Mon - Fri: 9am - 6pm
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
