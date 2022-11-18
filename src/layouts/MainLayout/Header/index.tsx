import { useAppDispatch, useAppSelector } from "../../../hooks";
import { loadTheme, selectThemeName } from "../../../theme/themeSlice";

const Header = () => {
  const currentTheme = useAppSelector((state) => selectThemeName(state));
  const isDarkTheme = currentTheme === "dark";
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
