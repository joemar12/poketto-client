import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { LoginRequest } from "../../../features/Authentication";
import {
  getUserProfileSuccess,
  selectUserDisplayName,
} from "../../../features/Authentication";
import { extractUserProfileFromAuthResult } from "../../../features/Authentication/utils";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState } from "../../../store";
import { loadTheme, selectThemeName } from "../../../theme/themeSlice";

interface HeaderProps {
  currentUser: string;
}

const Header = ({ currentUser }: HeaderProps) => {
  const { instance, accounts } = useMsal();
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => selectThemeName(state));
  useEffect(() => {
    if (accounts.length > 0) {
      instance.acquireTokenSilent(LoginRequest).then((result) => {
        const userProfile = extractUserProfileFromAuthResult(result);
        dispatch(getUserProfileSuccess(userProfile));
      });
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
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: selectUserDisplayName(state),
});

export default connect(mapStateToProps, null)(Header);
