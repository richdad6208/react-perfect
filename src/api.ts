// const response = await fetch("https://api.coinpaprika.com/v1/coins");
//       const data = await response.json();

export function getAllCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}

export function getCoin(coinId: String) {
  return fetch(
    `https://api.coinpaprika.com/v1/coins/${coinId?.toLowerCase()}`
  ).then((response) => response.json());
}

export function getTickers(coinId: String) {
  return fetch(
    `https://api.coinpaprika.com/v1/tickers/${coinId?.toLowerCase()}`
  ).then((response) => response.json());
}
