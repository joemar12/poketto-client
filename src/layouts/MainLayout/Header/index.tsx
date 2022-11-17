import { useAppDispatch, useAppSelector } from "../../../hooks";
import { loadTheme } from "../../../theme/themeSlice";

const Header = () => {
  const currentTheme = useAppSelector((state) => state.theme.themeName);
  const isDarkTheme = currentTheme == "dark";
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="text-lg">Global Header</h1>
      <button
        onClick={() => dispatch(loadTheme(isDarkTheme ? "light" : "dark"))}
      >
        toggle theme
      </button>
    </>
  );
};

export default Header;
