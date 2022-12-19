import Sidebar from "./Sidebar";
import Header from "./Header";
import MaiWrapper from "./MainWrapper";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex overflow-x-hidden h-screen">
        <Sidebar />
        <MaiWrapper>
          <Header />
          <MainContainer>
            <Outlet />
          </MainContainer>
          <Footer />
        </MaiWrapper>
      </div>
    </>
  );
};

export default MainLayout;
