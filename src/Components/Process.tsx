import React, { useState } from "react";
import styled from "styled-components";

const ProcessTitle = styled.h2`
  padding: 300px 90px 150px;
  font-size: 6rem;
`;

const ProcessTableContent = styled.div`
  padding: 0 90px;
  position: sticky;
  top: 85vh;
`;
const ProcessTableItem = styled.div`
  opacity: 0.2;
  font-size: 4rem;
  line-height: 8rem;
  cursor: pointer;
  transition: 0.5s;

  &.current {
    opacity: 1;
  }
`;

const Process = () => {
  const [currentIdentifier, setCurrentIdentifier] = useState("item");

  const handleClick = (identifier: string) => {
    setCurrentIdentifier(identifier);
  };

  return (
    <>
      <div>
        <ProcessTitle>BIG TITLE</ProcessTitle>
      </div>
      <ProcessTableContent>
        <ProcessTableItem
          className={currentIdentifier === "item" ? "item current" : "item"}
          onClick={() => handleClick("item")}
        >
          Item
        </ProcessTableItem>
        <ProcessTableItem
          className={currentIdentifier === "site" ? "site current" : "site"}
          onClick={() => handleClick("site")}
        >
          Site
        </ProcessTableItem>
        <ProcessTableItem
          className={currentIdentifier === "test" ? "test current" : "test"}
          onClick={() => handleClick("test")}
        >
          Test
        </ProcessTableItem>
      </ProcessTableContent>
    </>
  );
};

export default Process;
