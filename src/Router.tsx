import { createBrowserRouter } from "react-router-dom";
import Home from "./screen/Home";
import About from "./screen/About";
import Root from "./Root";
import NotFound from "./screen/NotFound";
import Error from "./component/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
