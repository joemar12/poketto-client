import { ReactNode } from "react";

interface MainWrapperProps {
  children?: ReactNode;
}

const MaiWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className="flex-1 w-full flex flex-col h-screen">{children}</main>
  );
};

export default MaiWrapper;
