import { useContext } from "react";
import UserContext from "../../Hooks/userContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../Styles/GlobalStyle";

const Footer = () => {
  const { username, setUsername } = useContext(UserContext);
  const handleChange = (e) => setUsername(e.target.value);
  const navigate = useNavigate();

  function SubmitButton() {
    if (username) {
      return <input type="submit" value="Search" />;
    } else {
      return <input type="submit" value="Search" disabled />;
    }
  }

  return (
    <StyledFooter>
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          <input
            name="username"
            placeholder=":search username"
            type="text"
            onChange={handleChange}
          />
          <SubmitButton />
        </form>
        <h3>Dive into dash, there’s a whole lot more to discover.</h3>

        <small>Designed & Built by <a href="https://www.nitinrai.dev" target='blank'>Nitin Rai</a></small>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: relative;
  padding-block: 12.5rem 4rem;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 1.5rem;
    border-radius: 0 0 10rem 10rem;
    background: ${({ theme }) => theme.text};
  }
  & form {
    position: relative;
    width: min(500px, 90%);
    margin: 0 auto;
    & input {
      width: 100%;
      background: ${({ theme }) => theme.text};
      padding: 1rem;
      border: 0;
      border-radius: 10rem;
    }
    & input[type="submit"] {
      position: absolute;
      right: 3px;
      top: 50%;
      transform: translateY(-50%);
      width: max-content;
      background: ${({ theme }) => theme.pink};
      padding: 14px 20px;
      color: ${({ theme }) => theme.text};
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.2em;
      cursor: pointer;
      &[disabled] {
        cursor: not-allowed;
      }
    }
  }
  & h3 {
    margin-block-start: 2rem;
    width: 25ch;
    margin-inline: auto;
  }
  & small {
    display: none;
  }
  @media (max-width: 540px) {
    padding-block: 5.5rem 4rem;
    & small {
      padding-block-start: 10rem;
      display: block;
    }
  }
`;
