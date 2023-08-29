import { createBrowserRouter } from "react-router-dom";
import Coin from "./screen/Coin";
import Root from "./Root";
import Coins from "./screen/Coins";

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
      },
    ],
  },
]);
export default Router;
