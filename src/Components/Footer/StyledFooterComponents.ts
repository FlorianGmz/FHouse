import styled from "styled-components";

export const StyledFooter = styled.footer<{ isContactPage: boolean }>`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  color: white;
  z-index: 1 !important;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 560px;
  padding: 100px 100px;
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    padding: 50px;
    height: ${({ isContactPage }) => (isContactPage ? "150px" : "468px")};
    gap: 50px;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  &.top {
    justify-content: space-between;
    align-items: flex-end;
    @media only screen and (max-width: 770px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &.bottom {
    justify-content: space-between;
    align-items: flex-end;
    @media only screen and (max-width: 770px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const FooterText = styled.div`
  &.logo {
    font-size: 7rem;
    font-weight: 500;
    @media only screen and (max-width: 770px) {
      font-size: 3.2rem;
    }
  }
  &.title {
    font-size: 2rem;
    @media only screen and (max-width: 770px) {
      font-size: 1.2rem;
      padding-bottom: 30px;
    }
  }
  &.copyright {
    color: #505050;
    font-size: 0.9rem;
    @media only screen and (max-width: 770px) {
      font-size: 0.7rem;
    }
  }
`;
