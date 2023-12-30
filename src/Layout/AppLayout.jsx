import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function AppLayout() {
  return (
    <div className="flex">
      <SideBar />
      <NavBar />
    </div>
  );
}

export default AppLayout;
