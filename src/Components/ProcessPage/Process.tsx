import { ProcessState } from "../../@types/types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ProcessTableContent,
  ProcessTableItem,
  ProcessItemSection,
  ProcessItem,
  ProcessText,
} from "./StyledProcessComponents";
import IntroductionText from "../../ui/IntroductionText";
import StyledImg from "../../ui/StyledImg";

const Process = () => {
  const [tableIsFixed, setTableIsFixed] = useState(false);

  const processData = useLoaderData() as ProcessState;

  const processIntroduction = processData[0].introduction.text;

  const processTitles = processData.map((process) => process.title);

  const [currentIdentifier, setCurrentIdentifier] = useState(processTitles[0]);

  const handleClick = (identifier: string) => {
    setCurrentIdentifier(identifier);
    const element = document.getElementById(identifier);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("Window Height:", window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      setTableIsFixed(scrollTop > windowHeight * 0.7);

      processTitles.forEach((title) => {
        const element = document.getElementById(title);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = windowHeight / 5;

          if (rect.top >= 0 && rect.top <= offset) {
            setCurrentIdentifier(title);
          }
          if (rect.top < 0 && rect.bottom > offset) {
            setCurrentIdentifier(title);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [processTitles]);

  return (
    <>
      <IntroductionText
        data-aos="fade-up"
        data-aos-duration="1000"
        $page="process"
      >
        <p>{processIntroduction}</p>
      </IntroductionText>
      <ProcessTableContent
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-offset="-500"
        className={tableIsFixed ? "fixed" : ""}
      >
        {processTitles.map((title) => (
          <ProcessTableItem
            key={title}
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
        {processData.map((process) => (
          <ProcessItem key={process.id} id={process.title}>
            <StyledImg
              $page="process"
              data-aos="fade"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-offset="-500"
              src={process.image}
              alt={process.image_alt}
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

export default Process;
