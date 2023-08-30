import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";

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

// interface ICoinInfo {
//   id:;
//   name:;
//   symbol:;
//   rank:;
//   is_new:;
//   is_active:;
//   type:;
//   logo:;
//   tags:;
//   team:;
//   description:;
//   message:;
//   open_source:;
//   started_at:;
//   development_status:;
//   hardware_wallet:;
//   proof_type:;
//   org_structure:;
//   hash_algorithm:;
//   links:;
//   links_extended:;
//   whitepaper:;
//   first_data_at:;
//   last_data_at:;
// }
// interface IPriceInfo {}

function Coin() {
  const [loading, setLoading] = useState(true);
  const {
    state: { name },
  } = useLocation();
  const { coinId } = useParams();
  // const { coinInfo, setCoinInfo } = useState({});
  // const { priceInfo, setpriceInfo } = useState({});

  useEffect(() => {
    (async () => {
      // setCoinInfo(
      const coinInfo = await (
        await fetch(
          `https://api.coinpaprika.com/v1/coins/${coinId?.toLowerCase()}`
        )
      ).json();
      // );
      // setpriceInfo(
      const priceInfo = await (
        await fetch(
          `https://api.coinpaprika.com/v1/tickers/${coinId?.toLowerCase()}`
        )
      ).json();
      // );
      console.log(coinInfo);
      console.log(priceInfo);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <h1>{name || "loading..."}</h1>
      </Header>
      <CoinList>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : null}
      </CoinList>
    </Container>
  );
}

export default Coin;
