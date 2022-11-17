import { useAppSelector } from "../../../hooks";
const Siderbar = () => {
  const themeName = useAppSelector((state) => state.theme.themeName);
  return (
    <>
      <h1 className="text-lg">Sidebar</h1>
      <p>the selected theme is {themeName}</p>
    </>
  );
};

export default Siderbar;
