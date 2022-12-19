import { ReactNode, useEffect } from "react";
import { connect } from "react-redux";
import { useMsal } from "@azure/msal-react";
import {
  LoginRequest,
  selectUserDisplayName,
} from "../../../features/Authentication";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState } from "../../../store";
import { loadTheme, selectThemeName } from "../../../theme/themeSlice";
import LogoutButton from "../../../components/LogoutButton";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { toggleSidebar } from "../Sidebar/sidebar.slice";

interface HeaderItemProps {
  children?: ReactNode;
}

const HeaderItem = ({ children }: HeaderItemProps) => {
  return <div className="self-center p-1">{children}</div>;
};

const Header = () => {
  const { instance, accounts } = useMsal();
  const dispatch = useAppDispatch();
  // const currentTheme = useAppSelector((state) => selectThemeName(state));
  const currentUser = useAppSelector((state) => selectUserDisplayName(state));
  useEffect(() => {
    if (accounts.length > 0) {
      instance.acquireTokenSilent(LoginRequest);
    }
  }, []);

  // const isDarkTheme = currentTheme === "dark";
  return (
    <>
      <div className="top-0 p-2 bg-slate-300 flex flex-row justify-end">
        {/* <HeaderItem>
          <button
            onClick={() => dispatch(loadTheme(isDarkTheme ? "light" : "dark"))}
          >
            toggle theme
          </button>
        </HeaderItem> */}
        <HeaderItem>
          <Bars3Icon
            className="w-[24px] h-[24px] text-black"
            onClick={() => dispatch(toggleSidebar())}
          ></Bars3Icon>
        </HeaderItem>
        <HeaderItem>
          <div className="text-lg">{currentUser}</div>
        </HeaderItem>
        <HeaderItem>
          <LogoutButton />
        </HeaderItem>
      </div>
    </>
  );
};

export default Header;
