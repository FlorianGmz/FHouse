import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { processState } from "../@types/types";
import { getProcess } from "../services/apiFaliHouse";
import { useLoaderData } from "react-router-dom";

export const ProcessTitle = styled.h2`
  width: 60vw;
  padding: 550px 90px 430px;
  font-size: 6rem;
`;

const ProcessTableContent = styled.section`
  padding: 0 90px;
  position: absolute;
  top: 85vh;
  &.fixed {
    position: fixed;
    top: 150px;
  }
`;
const ProcessTableItem = styled.div`
  text-transform: capitalize;
  opacity: 0.2;
  font-size: large;
  letter-spacing: 0.1rem;
  line-height: 3.5rem;
  cursor: pointer;
  transition: 0.5s;

  &.current {
    opacity: 1;
  }
`;

const ProcessItemSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: auto;
  padding-right: 9rem;
`;

const ProcessItem = styled.div`
  width: 65vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ProcessImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  object-position: center;
`;

const ProcessText = styled.p`
  width: 100%;
  height: 50%;
  padding: 8rem 10rem;
  font-size: 3rem;
  font-weight: lighter;
  line-height: 5rem;
`;

const Process = () => {
  const [tableFixed, setTableFixed] = useState(false);

  const { introduction, items } = useLoaderData() as processState;

  const processTitles = items
    .map((process) => process.title)
    .map((title) => title.replace(/-/g, " "));

  const [currentIdentifier, setCurrentIdentifier] = useState(items[0].title);

  const handleClick = (identifier: string) => {
    setCurrentIdentifier(identifier);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 1000) {
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
      <ProcessTitle>{introduction}</ProcessTitle>
      <ProcessTableContent className={tableFixed ? "fixed" : ""}>
        {processTitles.map((title) => (
          <ProcessTableItem
            className={
              currentIdentifier === title ? `${title} current` : `${title}`
            }
            onClick={() => handleClick(title)}
          >
            {title}
          </ProcessTableItem>
        ))}
      </ProcessTableContent>
      <ProcessItemSection>
        {items.map((process) => (
          <ProcessItem key={process.id}>
            <ProcessImage src={process.image} />
            <ProcessText>{process.text}</ProcessText>
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
