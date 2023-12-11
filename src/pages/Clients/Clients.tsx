import { ClientsWrapper, NavContainerClients, StyledLink } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <NavContainerClients>
        <StyledLink to={"/clients/wait_for_me"}>Жди меня</StyledLink>
        <StyledLink to={"/clients/institute_of_delays"}>Институт Задержек</StyledLink>
        <StyledLink to={"/clients/waiting_services"}>Ожидание-Сервис</StyledLink>
        <StyledLink to={"/clients/korneyluk"}>Игорь Корнелюк</StyledLink>
        <StyledLink to={"/clients/klitschko"}>Виталий Кличко</StyledLink>
      </NavContainerClients>
    </ClientsWrapper>
  );
}

export default Clients;
