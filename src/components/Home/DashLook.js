import styled from "styled-components";
import DashIMG from "../../assets/images/dashboardLook.png";
import { Flex } from "../Styles/Flexbox";
import { Container } from "../Styles/GlobalStyle";
import { IoLogoReact, IoLogoGithub, IoAnalytics, IoCube } from "react-icons/io5";

const DashLook = () => {
  return (
    <StyleDashLook>
      <Container>
        <img src={DashIMG} alt="nvnn mbjb" />
        <div>
          <Flex alignCenter spaceBetween gap="2rem">
            <Flex alignCenter justifyCenter flexColumn gap='1rem'>
              <IoLogoReact />
              <h5>React JS</h5>
            </Flex>
            <Flex alignCenter justifyCenter flexColumn gap='1rem'>
              <IoLogoGithub />
              <h5>GitHub API</h5>
            </Flex>
            <Flex alignCenter justifyCenter flexColumn gap='1rem'>
              <IoAnalytics />
              <h5>Chart JS</h5>
            </Flex>
            <Flex alignCenter justifyCenter flexColumn gap='1rem'>
              <IoCube />
              <h5>Styled Components</h5>
            </Flex>
          </Flex>
        </div>
      </Container>
    </StyleDashLook>
  );
};

export default DashLook;

const StyleDashLook = styled.section`
  width: 100%;
  text-align: center;
  padding-block: 2rem;
  & > div > img {
    display: block;
    width: min(1080px, 100%);
    height: auto;
    margin-inline: auto;
  }
  & > div > div {
    padding-block: 2rem 0;
    & > div {
      padding-block: 4rem;
      & > * {
        flex: 1;
        min-height: 200px;
        background: hsla(${({ theme }) => theme.hsl}, 0.025);
        border-radius: 0.6rem;
        transition: ${({ theme }) => theme.transPrime};
        cursor: pointer;
        & svg {
          background: ${({ theme }) => theme.light};
          width: 50px;
          height: 50px;
          padding: 0.8rem;
          border-radius: 6px;
          & path {
            transition: ${({ theme }) => theme.transPrime};
          }
        }
        &:hover {
          background: ${({ theme }) => theme.light};
          & svg path {
            color: #8338EC;
          }
        }
      }
    }
    @media (max-width: 950px) {
      & > div {
        flex-wrap: wrap;
        gap: 1rem;
        padding-block: 4rem 0;
        & > * {
          flex: 1 1 calc(100% / 2 - 2rem);
          min-height: 150px;
        }
      }
    }
  }
  @media (max-width: 750px) {
    padding-block: 5rem;
  }
`;
