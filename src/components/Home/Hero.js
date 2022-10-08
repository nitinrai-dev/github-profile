import { useContext } from "react";
import UserContext from "../../Hooks/userContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconCircle, IconSearch } from "../../assets/SVG";
import { Flex } from "../Styles/Flexbox";

const Hero = () => {
  const { username, setUsername } = useContext(UserContext);

  const handleChange = (e) => setUsername(e.target.value);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    if (username) {
      return navigate("/dashboard");
    } 
  }

  return (
    <StyledHero>
      <Flex alignCenter justifyEnd flexColumn>
        <h1>Find Your Github Profile</h1>
        <form
          onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder=":search username"
            type="text"
            onChange={handleChange}
          />
        </form>
      </Flex>
      <StyledCircleButton>
        <button onClick={handleSubmit}><IconSearch /></button>
        <IconCircle />
        <h2>A simple yet creative way to interact with your  GitHub profile.</h2>
        <p>Scroll Down</p>
      </StyledCircleButton>
    </StyledHero>
  );
};

export default Hero;

// Hero Styles

const StyledHero = styled.section`
  position: relative;
  text-align: center;
  padding-top: 30vh;
  & > *:first-child {
    margin-inline: auto;
    width: min(600px, 100%);
    padding-bottom: 2rem;
    & form {
      width: 100%;
      transition: ${({ theme }) => theme.transPrime};
      & input {
        display: block;
        border: 0;
        padding: 1.25rem 2rem;
        background: ${({ theme }) => theme.light};
        border-radius: 10rem;
        line-height: 1;
        width: min(350px, 100%);
        margin: 0.5rem auto;
        color: #fff;
      }
    }
  }
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 55vh;
    height: 180px;
    width: 140px;
    border: 1px solid ${({ theme }) => theme.lighter};
    border-radius: 1rem;
    transform: rotate(-45deg);
  }
  &::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 35vh;
    height: 220px;
    width: 180px;
    border: 1px solid ${({ theme }) => theme.lighter};
    border-radius: 1rem;
    transform: rotate(-45deg);
  }
  @media (max-width: 750px) {
  & > *:first-child {
    min-height: 50vh;
    padding-block-start: 20rem;
  }
  &::before, &::after {
    content: none;
  }
  }
`;

// Circle Button

const StyledCircleButton = styled.div`
  position: relative;
  width: min(700px, 90%);
  margin-inline: auto;
  & > svg {
    width: 100%;
    height: auto;
  }
  & > button {
    position: absolute;
    right: 12%;
    top: 10%;
    background: ${({ theme }) => theme.pink};
    border: 5px solid ${({ theme }) => theme.background};
    border-radius: 100%;
    width: 65px;
    height: 65px;
    display: grid;
    place-items: center;
    cursor: pointer;
    & svg {
      width: 30px;
      height: auto;
    }
  }
  & > h2 {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: -14rem auto 6rem;
    width: min(500px, 100%);
  }
  & > p {
    position: absolute;
    top: 12rem;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.25;
    pointer-events: none;
  }
  @media (max-width: 750px) {
    margin-block-start: 8rem;
    & > button {
      right: 50%;
      transform: translateX(50%);
      top: -32.5px;
    }
    & > h2 {
      margin: 0 auto;
    }
  }
  @media (max-width: 540px) {
  & > p {
    top: 6rem;
  }
  }
`;
