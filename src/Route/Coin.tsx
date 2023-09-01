import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import { styled } from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import { getCoin, getTickers } from "../api";

const Container = styled.div`
  width: min(1200px, 100% - 2em);
  margin-inline: auto;
`;
const Header = styled.header`
  padding-block: 2rem;
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
  padding-block: 1em;
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
  padding-block: 2em;
  font-size: 27px;
  line-height: 1.3;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;
const Tab = styled.div<{ isActive: boolean }>`
  a {
    display: block;
    padding: 1em 3em;
    background: #455a64;
    border-radius: 20px;
    color: ${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.textColor};
  }
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

interface RouteParams {
  coinId: string;
}
interface Location {
  state: string;
  name: string;
}

function Coin() {
  const location = useLocation();
  const state = location.state as Location;
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<ICoinInfo[]>(
    ["CoinInfo", coinId],
    () => getCoin(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<
    IPriceInfo[]
  >(["CoinInfo", coinId], () => getTickers(coinId));
  // const [loading, setLoading] = useState(true);
  // const [coinInfo, setCoinInfo] = useState<ICoinInfo>();
  // const [priceInfo, setpriceInfo] = useState<IPriceInfo>();
  // useEffect(() => {
  //   (async () => {
  //     const coinData = await (
  //       await fetch(
  //         `https://api.coinpaprika.com/v1/coins/${coinId?.toLowerCase()}`
  //       )
  //     ).json();

  //     const priceData = await (
  //       await fetch(
  //         `https://api.coinpaprika.com/v1/tickers/${coinId?.toLowerCase()}`
  //       )
  //     ).json();
  //     setCoinInfo(coinData);
  //     setpriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);
  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Header>
        <h1>{state?.name ? state.name : loading ? loading : infoData?.name}</h1>
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
                <span>{infoData?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>SYMBOL:</span>
                <span>{infoData?.symbol}</span>
              </OverviewItem>

              <OverviewItem>
                <span>OPEN SOURCE:</span>
                <span>{infoData?.open_source ? "YES" : "NO"}</span>
              </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
              <OverviewItem>
                <span>TOTAL SUPPLY:</span>
                <span>{tickersData?.total_supply.toLocaleString()}</span>
              </OverviewItem>
              <OverviewItem>
                <span>MAX SUPPLY:</span>
                <span>{tickersData?.max_supply.toLocaleString()}</span>
              </OverviewItem>
            </Overview>
          </CoinWrapper>
        )}
      </CoinSection>
      <Tabs>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/${coinId}/price`}>Price</Link>
        </Tab>
        <Tab isActive={chartMatch !== null}>
          <Link to={`/${coinId}/chart`}>Chart</Link>
        </Tab>
      </Tabs>
      <Outlet />
    </Container>
  );
}

export default Coin;
