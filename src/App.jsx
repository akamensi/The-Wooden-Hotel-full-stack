import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <GlobalStyles /> This component doesn't accept any children, it's a
      selfClosin Component, it's need to be a sibling of all others components*/}
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <div>
              <Heading as="h1">The wooden Hotel</Heading>
              <Heading as="h2">wooden</Heading>
              <Button>check in</Button>
              <Button variation="secondary" size="small">
                check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Hotel</Heading>
            <div>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
