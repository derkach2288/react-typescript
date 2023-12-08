import { useLocation } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Footer,
  Main,
  NavContainer,
  StyledLink,
  LogoImg,
  LogoContainer,
} from "./styles";
import { LayoutProps } from "./types";

import { LogoIcon } from "assets";

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  console.log(location);
  return (
    <LayoutWrapper>
      <Header>
        <LogoContainer>
          <StyledLink to={"/"}>
            <LogoImg src={LogoIcon} alt="Logo" />
          </StyledLink>
        </LogoContainer>
        <NavContainer>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="/"
          >
            Home
          </StyledLink>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="/users"
          >
            Users
          </StyledLink>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="about"
          >
            About
          </StyledLink>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="clients"
          >
            Clients
          </StyledLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </LayoutWrapper>
  );
}

export default Layout;
