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

  const { introduction, items } = useLoaderData() as ProcessState;

  const processTitles = items.map((process) => process.title);

  const [currentIdentifier, setCurrentIdentifier] = useState(processTitles[0]);

  const handleClick = (identifier: string) => {
    setCurrentIdentifier(identifier);
    const element = document.getElementById(identifier);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      setTableFixed(scrollTop > windowHeight * 0.8);

      items.forEach((process) => {
        const element = document.getElementById(process.title);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= windowHeight / 10) {
            setCurrentIdentifier(process.title);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <>
      <IntroductionText
        data-aos="fade-up"
        data-aos-duration="1000"
        $page="process"
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
        {items.map((process) => (
          <ProcessItem key={process.id} id={process.title}>
            <StyledImg
              $page="process"
              data-aos="fade"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-offset="-500"
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

export default Process;
