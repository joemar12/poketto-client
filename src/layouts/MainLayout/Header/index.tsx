import { useEffect } from "react";
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

interface HeaderProps {
  currentUser: string;
}

const Header = ({ currentUser }: HeaderProps) => {
  const { instance, accounts } = useMsal();
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => selectThemeName(state));
  useEffect(() => {
    if (accounts.length > 0) {
      instance.acquireTokenSilent(LoginRequest);
    }
  }, []);

  const isDarkTheme = currentTheme === "dark";
  return (
    <>
      <h1 className="text-lg">Global Header</h1>
      <h1 className="text-lg">hi {currentUser}</h1>
      <button
        onClick={() => dispatch(loadTheme(isDarkTheme ? "light" : "dark"))}
      >
        toggle theme
      </button>
      <LogoutButton />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: selectUserDisplayName(state),
});

export default connect(mapStateToProps, null)(Header);
