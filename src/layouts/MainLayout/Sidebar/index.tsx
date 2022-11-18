import { useAppSelector } from "../../../hooks";
import { selectThemeName } from "../../../theme/themeSlice";
const Siderbar = () => {
  const themeName = useAppSelector((state) => selectThemeName(state));
  return (
    <>
      <h1 className="text-lg">Sidebar</h1>
      <p>the selected theme is {themeName}</p>
    </>
  );
};

export default Siderbar;
