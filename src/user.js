import { useLocation } from "react-router";

const User = (props) => {
  const location = useLocation();
  const username = location.state.id;

  return (
    <h1>Hello {username}</h1>
  );
}

export default User;