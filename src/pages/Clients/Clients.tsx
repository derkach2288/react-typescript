import { ClientsWrapper, NavContainerClients, StyledLink } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <NavContainerClients>
        <StyledLink to="wait_for_me">Жди меня</StyledLink>
        <StyledLink to="institute_of_delays">Институт Задержек</StyledLink>
        <StyledLink to="waiting_services">Ожидание-Сервис</StyledLink>
        <StyledLink to="korneyluk">Игорь Корнелюк</StyledLink>
        <StyledLink to="klitschko">Виталий Кличко</StyledLink>
      </NavContainerClients>
    </ClientsWrapper>
  );
}

export default Clients;
