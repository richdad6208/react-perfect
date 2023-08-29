import { createBrowserRouter } from "react-router-dom";
import Coin from "./screen/Coin";
import Coins from "./screen/Coins";
import Root from "./Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/:coinId",
    element: <Coin />,
  },
]);
export default Router;
