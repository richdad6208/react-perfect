import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.h2`
  color: ${(props) => props.theme.accentColor};
  font-size: 30px;
  font-weight: 700;
`;

function Coin() {
  const { coinId } = useParams();
  return (
    <>
      <Title>Coin: {coinId}</Title>
    </>
  );
}

export default Coin;
