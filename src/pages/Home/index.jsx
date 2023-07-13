import Search from "../../components/SearchAppBar";
import GridFilmed from "../../components/SpacingGrid";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Search />
      <div>
        <Outlet />
        
        
      </div>
    </>
  );
}

export default Home;
