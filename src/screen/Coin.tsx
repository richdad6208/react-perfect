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
const CoinSection = styled.div``;

const CoinWrapper = styled.div`
  background: #455a64;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: min(1000px, 95%);
  margin-inline: auto;
  border-radius: 20px;
  padding-block: 2em;
`;
const Overview = styled.div`
  width: min(600px, 90%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
  padding: 2em;
  border-radius: 20px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5em;
  span:first-child {
    font-size: 15px;
  }
  span:last-child {
    font-size: 25px;
  }
`;
const Description = styled.div`
  width: min(600px, 90%);
  padding-block: 4em;
  font-size: 27px;
  line-height: 1.3;
`;

interface Tags {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface Team {
  id: string;
  name: string;
  position: string;
}

interface ICoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: Tags[];
  team: Team[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      percent_from_price_ath: number;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coinInfo, setCoinInfo] = useState<ICoinInfo>();
  const [priceInfo, setpriceInfo] = useState<IPriceInfo>();
  const {
    state: { name },
  } = useLocation();
  const { coinId } = useParams();

  useEffect(() => {
    (async () => {
      const coinData = await (
        await fetch(
          `https://api.coinpaprika.com/v1/coins/${coinId?.toLowerCase()}`
        )
      ).json();

      const priceData = await (
        await fetch(
          `https://api.coinpaprika.com/v1/tickers/${coinId?.toLowerCase()}`
        )
      ).json();
      setCoinInfo(coinData);
      setpriceInfo(priceData);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <h1>{name || coinInfo?.name}</h1>
      </Header>
      <CoinSection>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <CoinWrapper>
            <Overview>
              <OverviewItem>
                <span>RANK:</span>
                <span>{coinInfo?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>SYMBOL:</span>
                <span>{coinInfo?.symbol}</span>
              </OverviewItem>

              <OverviewItem>
                <span>OPEN SOURCE:</span>
                <span>{coinInfo?.open_source ? "YES" : "NO"}</span>
              </OverviewItem>
            </Overview>
            <Description>{coinInfo?.description}</Description>
            <Overview>
              <OverviewItem>
                <span>TOTAL SUPPLY:</span>
                <span>{priceInfo?.total_supply.toLocaleString()}</span>
              </OverviewItem>
              <OverviewItem>
                <span>MAX SUPPLY:</span>
                <span>{priceInfo?.max_supply.toLocaleString()}</span>
              </OverviewItem>
            </Overview>
          </CoinWrapper>
        )}
      </CoinSection>
    </Container>
  );
}

export default Coin;
