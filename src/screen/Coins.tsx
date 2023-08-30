import { Link } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: min(1200px, 100% - 2em);
  margin-inline: auto;
`;
const Header = styled.header`
  padding-block: 3rem;
  h1 {
    font-size: 50px;
    color: ${(props) => props.theme.accentColor};
    font-weight: 700;
    text-align: center;
  }
`;
const CoinList = styled.div``;
const Coin = styled.div`
  background: white;
  width: 85%;
  margin-inline: auto;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.bgColor};
  font-size: 25px;
  a {
    padding-inline: 1em;
    display: block;
    padding-block: 1.4em;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
function Coins() {
  const coinObj = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "usdt-tether",
      name: "Tether",
      symbol: "USDT",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const data = await response.json();
      console.log(data);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <h1>COIN</h1>
      </Header>
      <CoinList>
        {coinObj.map((coin, idx) => {
          return (
            <Coin key={idx}>
              <Link to={`/${coin.name}`}>{coin.name} &rarr;</Link>
            </Coin>
          );
        })}
      </CoinList>
    </Container>
  );
}

export default Coins;
