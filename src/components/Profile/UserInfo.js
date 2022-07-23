import styled from "styled-components";
import { FaBriefcase, FaCalendarDay, FaMapMarker,FaCompressAlt } from 'react-icons/fa';

const UserInfo = ({ userData, handleToggle }) => (
  <StyledUserInfo>
    <button aria-hidden onClick={handleToggle}><FaCompressAlt /></button>
    {userData && (
      <>

        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.login && userData.name && (
          <h3>
            {userData.name}
            <p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                @{userData.login}
              </a>
            </p>
          </h3>
        )}

        {userData.bio && <p>{userData.bio}</p>}

        <StyledInfo>
          {userData.company && (
            <span>
              <FaBriefcase />
              {userData.company}
            </span>
          )}

          {userData.location && (
            <span>
              <FaMapMarker />
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span>
              <FaCalendarDay />
              Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </StyledInfo>

        <StyledStats>
          <li>
            <span>{userData.public_repos.toLocaleString()}</span>
            <span>Repositories</span>
          </li>
          <li>
            <span>{userData.followers.toLocaleString()}</span>
            <span>Followers</span>
          </li>
          <li>
            <span>{userData.following.toLocaleString()}</span>
            <span>Following</span>
          </li>
        </StyledStats>
      </>
    )}
  </StyledUserInfo>
);

export default UserInfo;

const StyledUserInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: min(750px, 90%);
  background-color: #f8f7ff;
  border-radius: 10px;
  padding: 4rem 2rem;
  text-align: center;
  & > button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: 0;
    background: transparent;
    padding: 1rem;
    cursor: pointer;
    & svg {
      width: 18px;
      height: auto;
    }
  }
  & .avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 4px solid crimson;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const StyledInfo = styled.div`
  display: flex;
  gap: 1.6rem;
  & > span {
    display: flex;
    align-items: center;
    gap: 6px;
    & svg {
      width: 16px;
      height: auto;
      margin-bottom: -1px;

    }
  }
`

const StyledStats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  align-items: center;
  list-style: none;
  margin-block-start: 1rem;
  & > li {
    background: #fff;
    padding: 1rem 2rem;
    border-radius: 6px;
    & span {
      display: block;
      color: #777;
      &:first-child {
        color: #121316;
        font-weight: 500;
      }
    }
  }
`