import {
  selectUserEmail,
  selectUserProfilePicture,
} from "../../../features/Authentication/user.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { loadTheme, selectThemeName } from "../../../theme/themeSlice";

const Header = () => {
  const currentTheme = useAppSelector((state) => selectThemeName(state));
  const currentUser = useAppSelector((state) => selectUserEmail(state));
  const currentUserProfilePicture = useAppSelector((state) =>
    selectUserProfilePicture(state)
  );
  const isDarkTheme = currentTheme === "dark";
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="text-lg">Global Header</h1>
      <h1 className="text-lg">hi {currentUser}</h1>
      <img src={currentUserProfilePicture}></img>
      <button
        onClick={() => dispatch(loadTheme(isDarkTheme ? "light" : "dark"))}
      >
        toggle theme
      </button>
    </>
  );
};

export default Header;
