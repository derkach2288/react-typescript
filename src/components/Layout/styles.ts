import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  color: ${colors.white};
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: ${colors.white};
  text-decoration: none;

`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
  color: ${colors.black};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const LogoContainer = styled.div`
  width: min-content;
  height: min-content;
`;

export const LogoImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const NavContainerFooter = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 20px;
  color: ${colors.white};
`;

export const LogoImgFooter = styled.img`
  height: 100px;
  width: 100px;
`;
