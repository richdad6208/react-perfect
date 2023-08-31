import { createBrowserRouter } from "react-router-dom";
import Coin from "./Route/Coin";
import Root from "./Root";
import Coins from "./Route/Coins";
import Chart from "./Route/Chart";
import Price from "./Route/Price";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
    ],
  },
]);
export default Router;
