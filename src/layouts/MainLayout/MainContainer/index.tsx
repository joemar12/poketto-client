import { ReactNode } from "react";

interface MainContainerProps {
  children?: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="main-container">{children}</div>;
};

export default MainContainer;
