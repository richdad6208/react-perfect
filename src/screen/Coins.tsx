import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Spinner from "react-bootstrap/Spinner";

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
    display: flex;
    align-items: center;
    padding-block: 1.4em;
    transition: color 1s;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
    img {
      width: 70px;
      margin-right: 20px;
    }
  }
`;

interface coinsInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<coinsInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const data = await response.json();
      setCoins(data.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <h1>COIN</h1>
      </Header>
      <CoinList>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          coins.map((coin, idx) => {
            return (
              <Coin key={idx}>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    alt="coin"
                  ></img>
                  {coin.name} &rarr;
                </Link>
              </Coin>
            );
          })
        )}
      </CoinList>
    </Container>
  );
}

export default Coins;
