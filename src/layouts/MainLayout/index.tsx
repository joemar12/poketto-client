import Sidebar from "./Sidebar";
import Header from "./Header";
import MaiWrapper from "./MainWrapper";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <MaiWrapper>
        <Header />
        <MainContainer>
          <Outlet />
        </MainContainer>
        <Footer />
      </MaiWrapper>
    </>
  );
};

export default MainLayout;
