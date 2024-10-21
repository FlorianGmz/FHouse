import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  width: 460px;
  height: 565px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10rem;
  @media only screen and (max-width: 770px) {
    margin-bottom: 50px;
  }
  &.carousel {
    width: 22rem;
    height: 35rem;
    margin-bottom: 50px;
    @media only screen and (max-width: 770px) {
      width: 23rem;
      margin-bottom: 20px;
    }
  }
`;

export const CardImg = styled.img`
  width: 120%;
  height: 80%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  ${CardContainer}:hover & {
    transform: translateX(-50px);
  }
`;

export const CardName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  @media only screen and (max-width: 770px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 50px;
  }
`;

export const StyledUnderline = styled.span`
  background-color: black;
  width: 0;
  height: 1px;
  border-radius: 1px;
  transition: 0.5s ease;
  ${CardContainer}:hover & {
    width: 100%;
  }
`;
