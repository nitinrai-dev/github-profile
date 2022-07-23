import { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "../Styles/Flexbox";
import { GoRepo, GoStar, GoRepoForked } from "react-icons/go";

const Repos = ({ repoData }) => {
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState("stars");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (repoData.length) {
      function getTopRepos(type) {
        const LIMIT = 12;
        const map = {
          stars: "stargazers_count",
          forks: "forks_count",
          size: "size",
        };
        const sortProperty = map[type];
        const sorted = repoData
          .filter((repo) => !repo.fork)
          .sort((a, b) => b[sortProperty] - a[sortProperty])
          .slice(0, LIMIT);
        setTopRepos(sorted);
      }
      getTopRepos(sortType);
    }
  }, [repoData, sortType]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const changeRepoSort = (sortType) => {
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ["stars", "forks", "size"];

  return (
    <StyledRepos>
      <Flex alignCenter spaceBetween gap="2rem">
        <h4>Repositories</h4>
        <StyledTab>
          {sortTypes.map((type, i) => (
            <button
              key={i}
              data-active={sortType === type ? "true" : "false"}
              onClick={() => changeRepoSort(type)}
            >
              {type}
            </button>
          ))}
        </StyledTab>
      </Flex>
      {topRepos.length > 0 ? (
        <ul>
          {topRepos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div>
                  <h5>
                    <GoRepo /> {repo.name}
                    <small>{repo.language}</small>
                  </h5>
                  <p>{repo.description}</p>
                </div>
                <Flex alignCenter spaceBetween gap="1rem" autoHeight>
                  <Flex alignCenter gap="1rem" autoHeight>
                    <small>
                      <GoStar /> {repo.stargazers_count.toLocaleString()}
                    </small>
                    <small>
                      <GoRepoForked /> {repo.forks.toLocaleString()}
                    </small>
                  </Flex>
                  <small className="repoSize">
                    {repo.size.toLocaleString()} KB
                  </small>
                </Flex>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No available repositories!</p>
      )}
    </StyledRepos>
  );
};
export default Repos;

const StyledRepos = styled.section`
  padding-block: 2rem 4rem;
  & > ul {
    margin-block-start: 1rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    & > * {
      width: calc(100% / 4 - 0.75rem);
      background: ${({ theme }) => theme.lighter};
      padding: 1rem;
      border-radius: 6px;
      box-shadow: ${({ theme }) => theme.boxShadow};
      & a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        gap: 2rem;
        & h5 {
          display: flex;
          align-items: center;
          gap: 5px;
          & small {
            background: ${({ theme }) => theme.light};
            padding: 3px 8px;
            border-radius: 10rem;
            margin-inline-start: 5px;
            color: ${({ theme }) => theme.textLight};
          }
          & svg {
            margin-block-end: -2px;
          }
        }
        & h5 + p {
          margin-block-start: 0.5rem;
          color: ${({ theme }) => theme.textLight};
        }
        & small {
          color: ${({ theme }) => theme.textLighter};
          min-width: max-content;
        }
      }
    }
    @media (max-width: 1060px) {
      & > * {
        width: calc(100% / 3 - 0.67rem);
      }
    }
    @media (max-width: 780px) {
      & > * {
        width: calc(100% / 2 - 0.5rem);
      }
    }
    @media (max-width: 540px) {
      & > * {
        width: 100%;
      }
    }
  }
`;

const StyledTab = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.light};
  border: 3px solid ${({ theme }) => theme.lighter};
  border-radius: 10rem;
  overflow: hidden;
  & > button {
    flex: 1;
    background: transparent;
    color: ${({ theme }) => theme.textLighter};
    border: 0;
    padding: 0.6rem 1.6rem;
    cursor: pointer;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    &[data-active="true"] {
      background: ${({ theme }) => theme.pink};
      color: #fff;
      border-radius: 10rem;
    }
  }
  @media (max-width: 540px) {
    & > button {
      padding-inline: 1rem;
    }
  }
`;
