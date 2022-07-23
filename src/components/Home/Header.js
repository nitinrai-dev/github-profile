import styled from "styled-components";
import { IconLogo } from "../../assets/SVG";
import { Flex } from "../Styles/Flexbox";

const Header = () => {
  return (
    <StyledHeader>
      <Flex className="logo" alignCenter gap="1rem">
        <p>
          Github<span>PRO</span>
        </p>
        <IconLogo />
      </Flex>
      <a href="//www.nitinrai.dev" target="_blank" rel="noreferrer">
        <span>©</span>
        <div>
          <span>Code by</span>
          <div>
            <span>Nitin</span> <span>Rai</span>
            </div>
        </div>
      </a>
    </StyledHeader>
  );
};

export default Header;

// Header Style

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding-block: 2.5rem;
  z-index: 5;
  & .logo {
    background: ${({ theme }) => theme.lighter};
    height: 60px;
    width: max-content;
    padding-inline: 2.5rem 1rem;
    border-radius: 0 10rem 10rem 0;
    & p {
      & span {
        font-weight: 500;
      }
    }
  }
  & > a {
    position: absolute;
    inset-block-start: 2.5rem;
    inset-inline-end: 2.5rem;
    height: 58px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding-inline: 2.5rem;
    border-block: 2px solid ${({ theme }) => theme.lighter};
    & > div {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 5px;
        & > span {
            transform: translateX(0);
            transition: ${({ theme }) => theme.transPrime};
        }
        & > div {
            transform: translateX(0);
            position: relative;
            transition: ${({ theme }) => theme.transPrime};
            & span:last-child {
               position: absolute;
               left: 100%;
               padding-inline-start: 5px;
            }
        }
    }
    &:hover > div > :is(span, div) {
        transform: translateX(-3.1em);
    }
    &:hover > span {
        transform: rotate(360deg);
        transition: ${({ theme }) => theme.transPrime};
    }
  }
  @media (max-width: 540px) {
    & > a {
      display: none;
    }
  }
`;
