import { Outlet } from "react-router-dom";
import Header from "./component/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
