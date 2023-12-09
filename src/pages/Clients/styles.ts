import { styled } from "styled-components";
import {Link} from "react-router-dom"

import { colors } from "styles/colors";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavContainerClients = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  color: ${colors.black};
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: ${colors.black};
  text-decoration: none;

`;
