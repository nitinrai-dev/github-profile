import styled from "styled-components"
import { Flex } from "../Styles/Flexbox";
import { Container } from "../Styles/GlobalStyle";
import { DashIcon1, DashIcon2, DashIcon3 } from "../../assets/SVG";
import linesBG from '../../assets/SVG/linesBG.svg'

const DashFeatures = () => {
  return (
    <StyledDashFeature>
        <Container>
            <h2>And there is more! the 3-<b>POWERS</b>..</h2>
            <Flex justifyCenter gap='2rem'>
                <Flex alignCenter spaceBetween flexColumn gap='4rem'>
                    <h4>Profile</h4>
                    <DashIcon1 />
                    <p>GitHub Profile, followers-following, repository and more..</p>
                </Flex>
                <Flex alignCenter spaceBetween flexColumn gap='4rem'>
                    <h4>Performance</h4>
                    <DashIcon2 />
                    <p>Statics based on languages, users interaction and more..</p>
                </Flex>
                <Flex alignCenter spaceBetween flexColumn gap='4rem'>
                    <h4>Project</h4>
                    <DashIcon3 />
                    <p>List of projects, fork-stars, size, filter and more..</p>
                </Flex>
            </Flex>
        </Container>
    </StyledDashFeature>
  )
}

export default DashFeatures;

const StyledDashFeature = styled.section`
    position: relative;
    width: 100%;
    background: ${({ theme }) => theme.text};
    text-align: center;
    padding-block: 10rem 6rem;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 0;
        width: 100%;
        height: 1.5rem;
        border-radius: 0 0 10rem 10rem;
        background: ${({ theme }) => theme.background};
    }
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle farthest-side at 50% 50%,#fcf8f4,rgba(252,248,244,0)),
        url(${linesBG});
        background-position: 0 0,50% 50%;
        background-size: auto,2482px;
        background-repeat: repeat,repeat-x;
        z-index: -1;
    }
    & h2 {
        width: min(500px, 100%);
        margin-inline: auto;
        color: ${({ theme }) => theme.background};
        & + div {
            padding: 4rem 10vw;
            & > * {
                flex: 1;
                height: auto;
                padding: 3rem 1rem;
                background: ${({ theme }) => theme.background};
                border-radius: 0.6rem;
                & p {
                    width: 30vh;
                }
            }
        }
        @media (max-width: 1060px) {
            & + div {
                flex-direction: column;
                padding-inline: 0;
                & > * {
                    gap: 2rem;
                    & svg {
                        width: 80px;
                        height: 80px;
                    }
                }
            }
        }
    }

`