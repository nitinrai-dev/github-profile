import "chart.js/auto";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const Charts = ({ langData, repoData }) => {
  const backgroundColor = ["#121316"];
  const LIMIT = 5;
  const sortProperty = "stargazers_count";
  const mostStarredRepos = repoData
    .filter((repo) => !repo.fork)
    .sort((a, b) => b[sortProperty] - a[sortProperty])
    .slice(0, LIMIT);
  const filteredRepos = repoData.filter(
    (repo) => !repo.fork && repo.stargazers_count > 0
  );
  const uniqueLangs = new Set(filteredRepos.map((repo) => repo.language));
  const labels = Array.from(uniqueLangs.values()).filter((l) => l);

  const langChart = {
    labels: langData.map((lang) => lang.label),
    datasets: [
      {
        data: langData.map((lang) => lang.value),
        backgroundColor: '#fff',
        borderRadius: 9999,
        maxBarThickness: 20,
      },
    ],
  };
  const mostStarChart = {
    labels: mostStarredRepos.map((repo) => repo.name),
    datasets: [
      {
        data: mostStarredRepos.map((repo) => repo[sortProperty]),
        backgroundColor: backgroundColor,
        hoverBackgroundColor: '#FF006E',
      },
    ],
  };
  const starChart = {
    labels: Array.from(uniqueLangs.values()).filter((l) => l),
    datasets: [
      {
        data: labels.map((lang) => {
          const repos = filteredRepos.filter((repo) => repo.language === lang);
          const starsArr = repos.map((r) => r.stargazers_count);
          const starSum = starsArr.reduce((a, b) => a + b, 0);
          return starSum;
        }),
        backgroundColor: backgroundColor,
        hoverBackgroundColor: '#FF006E',
      },
    ],
  };

  const defaultOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: {
        display: false,
      },
      xAxws: {
        display: false,
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'middle'
      }
    }
  };
  const langOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
      },
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: 9, 
          }
        },
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <StyledCharts>
        <div>
          <h5>Top Languages</h5>
          <Bar data={langChart} options={langOptions} />
        </div>
        <div>
          <h5>Most Starred</h5>
          <Pie data={mostStarChart} options={defaultOptions} />
        </div>
        <div>
          <h5>Stars per Language</h5>
          <Doughnut data={starChart} options={defaultOptions} />
        </div>
    </StyledCharts>
  );
};

export default Charts;

const StyledCharts = styled.section`
    overflow: hidden;
    padding-block: 1rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    & > div {
      position: relative;
      width: calc((100vw - 5rem) / 3 - 1rem);
      height: 350px;
      background: ${({ theme }) => theme.lighter};
      box-shadow: ${({ theme }) => theme.boxShadow};
      padding: 5rem 1rem 1rem;
      border-radius: 8px;
      & h5 {
        position: absolute;
        top: 1.5rem;
        left: 1rem;
        color: ${({ theme }) => theme.text};
      }
      &:first-child {
        background: ${({ theme }) => theme.purple};
        & h5 {
          color: #fff;
        }
      }
    }
    @media (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
      & > div {
        width: calc((100vw - 5rem) / 2 - 1rem);
      }
    }
    @media (max-width: 680px) {
      grid-template-columns: auto;
      & > div {
        width: 100%;
      }
    }
`;
