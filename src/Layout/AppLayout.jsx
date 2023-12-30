import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function AppLayout() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
