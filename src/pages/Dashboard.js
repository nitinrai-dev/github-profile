import { useEffect, useState, useContext } from "react";
import UserContext from "../Hooks/userContext";
import { ThemeProvider } from "styled-components";
import GhPolyglot from "gh-polyglot";
import { Header, UserRepo, Error, Charts } from "../components/Profile";
import {
  GlobalStyle,
  lightTheme,
  darkTheme,
  Container,
} from "../components/Styles/GlobalStyle";

const Dashboard = () => {
  const { username } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });
  const [theme, setTheme] = useState("light");

  const UserAPI = `https://api.github.com/users/${username}`;
  const RepoAPI = `https://api.github.com/users/${username}/repos?per_page=100`;

  const getUserData = (API, SetData) => {
    fetch(API)
      .then((response) => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        return response.json();
      })
      .then((json) => SetData(json))
      .catch((error) => {
        setError({ active: true, type: 400 });
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error("Error:", err);
        setError({ active: true, type: 400 });
      }
      setLangData(stats);
    });

    getUserData(UserAPI, setUserData);
    getUserData(RepoAPI, setRepoData);
  }, [UserAPI, RepoAPI, username]);

  useEffect(() => {
    fetch(`https://api.github.com/rate_limit`)
      .then((response) => response.json())
      .then((json) => {
        setRateLimit(json.resources.core);
        if (json.resources.core.remaining < 1) {
          setError({ active: true, type: 403 });
        }
      });
  })

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        {error && error.active ? (
          <Error error={error} />
        ) : (
          <>
            {userData && rateLimit && (
              <Header
                theme={theme}
                rateLimit={rateLimit}
                userData={userData}
                themeToggler={themeToggler}
              />
            )}
            {langData && repoData && (
              <Charts langData={langData} repoData={repoData} />
            )}
            {repoData && (
              <UserRepo repoData={repoData} setRepoData={setRepoData} />
            )}
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
