import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const StyleHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);
`;

function Header() {
  return (
    <StyleHeader>
      <Logout />
    </StyleHeader>
  );
}

export default Header;
