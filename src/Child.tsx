import styled from "styled-components";
import react from "react";

const Container = styled.div`
  background: ${(props) => props.theme.bgColor};
`;
const P = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const Button = styled.button`
  background: ${(props) => props.theme.bgColor};
`;

function Child() {
  return (
    <>
      <Container>
        <P> 일단 동작하게 만들어라</P>
        <Button></Button>
      </Container>
    </>
  );
}

export default Child;
