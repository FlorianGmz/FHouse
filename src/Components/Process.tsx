import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { processState } from "../@types/types";
import { getProcess } from "../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";
import IntroductionText from "../ui/IntroductionText";

const ProcessTableContent = styled.section`
  padding: 0 100px;
  position: absolute;
  top: 90vh;
  &.fixed {
    position: fixed;
    top: 10vh;
  }
`;
const ProcessTableItem = styled.div`
  text-transform: capitalize;
  opacity: 0.2;
  font-size: large;
  font-weight: 600;
  line-height: 2rem;
  cursor: pointer;
  transition: 0.5s;
  &.current {
    opacity: 1;
  }
`;

const ProcessItemSection = styled.section`
  top: 95vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto;
  padding-right: 100px;
  z-index: 50;
`;

const ProcessItem = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ProcessImage = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  object-position: center;
`;

const ProcessText = styled.p`
  width: 100%;
  height: 45%;
  padding: 60px 100px;
  font-size: 1.65rem;
  font-weight: 500;
  line-height: 3rem;
`;

const Process = () => {
  const [tableFixed, setTableFixed] = useState(false);
  5;
  const { introduction, items } = useLoaderData() as processState;

  const processTitles = items.map((process) => process.title);

  console.log(processTitles);

  const [currentIdentifier, setCurrentIdentifier] = useState(processTitles[0]);

  const handleClick = (identifier: string) => {
    setCurrentIdentifier(identifier);
    const element = document.getElementById(identifier);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        ((window.scrollY || document.documentElement.scrollTop) /
          window.innerHeight) *
        100; // Convertir en vh
      if (scrollTop > 70) {
        // 20vh au lieu de 700px
        setTableFixed(true);
      } else {
        setTableFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <IntroductionText
        data-aos="fade-up"
        data-aos-duration="1000"
        page="process"
      >
        <pre>{introduction}</pre>
      </IntroductionText>
      <ProcessTableContent
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-offset="-500"
        className={tableFixed ? "fixed" : ""}
      >
        {processTitles.map((title) => (
          <ProcessTableItem
            className={
              currentIdentifier === title ? `${title} current` : `${title}`
            }
            onClick={() => handleClick(title)}
          >
            {title.replace(/-/g, " ")}
          </ProcessTableItem>
        ))}
      </ProcessTableContent>
      <ProcessItemSection>
        {items.map((process) => (
          <ProcessItem key={process.id} id={process.title}>
            <ProcessImage
              data-aos="fade"
              data-aos-easing="ease"
              data-aos-duration="1000"
              src={process.image}
            />
            <ProcessText data-aos="fade-up" data-aos-duration="1000">
              {process.text}
            </ProcessText>
          </ProcessItem>
        ))}
      </ProcessItemSection>
    </>
  );
};

export async function loader() {
  const processData = await getProcess();
  return processData;
}

export default Process;
