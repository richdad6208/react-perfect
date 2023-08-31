// const response = await fetch("https://api.coinpaprika.com/v1/coins");
//       const data = await response.json();

export function getAllCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
