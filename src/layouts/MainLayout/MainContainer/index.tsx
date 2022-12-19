import { ReactNode } from "react";

interface MainContainerProps {
  children?: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="main-container h-full mb-auto p-4 overflow-y-auto bg-slate-100">
      {children}
    </div>
  );
};

export default MainContainer;
