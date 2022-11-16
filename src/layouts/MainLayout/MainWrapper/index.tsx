import { ReactNode } from "react";

interface MainWrapperProps {
  children?: ReactNode;
}

const MaiWrapper = ({ children }: MainWrapperProps) => {
  return <div className="main-wrapper">{children}</div>;
};

export default MaiWrapper;
