import { styled } from "styled-components";

const Container = styled.div`
  width: min(var(--max-width), 100%- var(--padding) * 2);
  margin-inline: auto;
`;

function Coins() {
  return (
    <Container>
      <h1>Coins</h1>
    </Container>
  );
}

export default Coins;
