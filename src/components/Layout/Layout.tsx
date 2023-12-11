import { useLocation } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Footer,
  Main,
  NavContainer,
  StyledLink,
  StyledLinkFooter,
  LogoImg,
  LogoContainer,
  NavContainerFooter,
  LogoImgFooter,
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
            to="/about"
          >
            About
          </StyledLink>
          <StyledLink
            style={({ isActive }: any) => ({
              color: isActive ? "blue" : "white",
            })}
            to="/clients"
          >
            Clients
          </StyledLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>

      <Footer>
        <LogoContainer>
          <StyledLinkFooter to={"/"}>
            <LogoImgFooter src={LogoIcon} alt="Logo" />
          </StyledLinkFooter>
        </LogoContainer>
        <NavContainerFooter>
          <StyledLinkFooter to="/">Home</StyledLinkFooter>
          <StyledLinkFooter to="/users">Users</StyledLinkFooter>
          <StyledLinkFooter to="about">About</StyledLinkFooter>
          <StyledLinkFooter to="clients">Clients</StyledLinkFooter>
        </NavContainerFooter>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
