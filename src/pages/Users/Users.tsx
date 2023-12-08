import {useNavigate} from "react-router-dom"

import Button from "components/Button";

import { UsersWrapper } from "./styles";

function Users() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/")
  }

  return (
    <UsersWrapper>
      Users
      <Button name="Go to Home page" onClick={goToHomePage} />
    </UsersWrapper>
  );
}

export default Users;
