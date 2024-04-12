import React from "react";
import data from "../../data/data.json";
import { aboutState } from "../@types/types";
import { ProcessTitle } from "./Process";

const About = () => {
  const aboutData: aboutState = data.about;

  const {
    introductionText,
    firstText,
    secondText,
    thirdText,
    conclusionText,
    diaporamaImage,
    mainImage,
  } = aboutData;

  return (
    <div>
      <ProcessTitle>{introductionText}</ProcessTitle>
    </div>
  );
};

export default About;
