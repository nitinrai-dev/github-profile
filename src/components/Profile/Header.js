import { useContext, useState } from "react";
import UserContext from "../../Hooks/userContext";
import styled from "styled-components";
import { Flex } from "../Styles/Flexbox";
import { IconSun, IconMoon } from "../../assets/SVG";
import RateLimit from "./RateLimit";
import UserInfo from "./UserInfo";

const Header = ({ theme, themeToggler, userData, rateLimit }) => {
  const { setUsername } = useContext(UserContext);
  const [showProfile, setShowProfile] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(value);
    e.target.reset();
  };
  const handleToggle = () => {
    setShowProfile(!showProfile);
  };

  return (
    <StyledHeader>
      <Flex alignCenter gap="0.6rem" onClick={handleToggle}>
        <img src={userData.avatar_url} alt="avatar" />
        <h5>
          Hey <span>{userData.name}</span>
        </h5>
      </Flex>

      <Flex alignCenter justifyEnd gap="0.6rem">
        {rateLimit && <RateLimit rateLimit={rateLimit} />}
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder=":search username"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
        </form>

        <button onClick={themeToggler}>
          {theme === "light" ? <IconMoon /> : <IconSun />}
        </button>
      </Flex>

      {userData && (
        <Flex
          alignCenter
          justifyCenter
          className={showProfile ? "active" : null}
        >
          <UserInfo userData={userData} handleToggle={handleToggle} />
        </Flex>
      )}
    </StyledHeader>
  );
};

export default Header;

// Header Styles

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  & > div:nth-child(1) {
    padding-block: 2rem;
    cursor: pointer;
    & img {
      width: 44px;
      height: 44px;
      object-fit: cover;
      border-radius: 100%;
      border: 2px solid ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.purple};
      filter: drop-shadow(-6px 8px 8px rgba(0, 0, 0, 0.25));
      cursor: pointer;
    }
    & h5 span {
      font-weight: 500;
    }
  }
  & > div:nth-child(2) {
    padding-block: 2rem;
    & form {
      width: min(450px, 90%);
      & input {
        width: 100%;
        height: 44px;
        background: ${({ theme }) => theme.light};
        border: 2px solid ${({ theme }) => theme.lighter};
        border-radius: 10rem;
        padding-inline: 1rem;
        &::placeholder {
          color: ${({ theme }) => theme.text};
        }
      }
    }
    & button {
      width: 44px;
      height: 44px;
      background: ${({ theme }) => theme.text};
      border: 0;
      border-radius: 100%;
      cursor: pointer;
      & path {
        fill: ${({ theme }) => theme.background};
      }
    }
  }
  & > div:last-child {
    display: none;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 999;
    &.active {
      display: flex;
    }
  }
  @media (max-width: 780px) {
    margin-bottom: 54px;
    gap: 0;
    & > div:nth-child(2) form {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
    }
  }
`;
