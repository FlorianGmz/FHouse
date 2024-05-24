import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProcessState } from "../@types/types";
import { useLoaderData } from "react-router-dom";
import IntroductionText from "../ui/IntroductionText";
import StyledImg from "../ui/StyledImg";
import StyledText from "../ui/StyledText";

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
  @media only screen and (max-width: 770px) {
    display: none;
  }
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
  @media only screen and (max-width: 770px) {
    display: block;
  }
`;

const ProcessItem = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Process = () => {
  const [tableFixed, setTableFixed] = useState(false);
  5;
  const { introduction, items } = useLoaderData() as ProcessState;

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
            <StyledImg
              page="process"
              data-aos="fade"
              data-aos-easing="ease"
              data-aos-duration="1000"
              src={process.image}
            />
            <StyledText
              page="process"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {process.text}
            </StyledText>
          </ProcessItem>
        ))}
      </ProcessItemSection>
    </>
  );
};

export default Process;
