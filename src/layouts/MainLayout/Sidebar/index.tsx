import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectThemeName } from "../../../theme/themeSlice";
import { selectSidebarIsOpen, toggleSidebar } from "./sidebar.slice";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface SidebarItemProps {
  label: string;
}
const SidebarItem = ({ label }: SidebarItemProps) => {
  return (
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-house-door-fill"></i>
      <span className="text-[15px] ml-4 text-gray-200 font-bold">{label}</span>
    </div>
  );
};

const Siderbar = () => {
  const themeName = useAppSelector((state) => selectThemeName(state));
  const sidebarIsOpen = useAppSelector((state) => selectSidebarIsOpen(state));
  const dispatch = useAppDispatch();
  return (
    // <>
    //   <h1 className="text-lg">Sidebar</h1>
    //   <p>the selected theme is {themeName}</p>
    // </>
    <aside
      className={`${
        sidebarIsOpen ? "" : "hidden"
      } flex-shrink-0 w-64 p-1 z-50 flex flex-col shadow-lg shadow-slate-900 transition-all duration-300 bg-slate-900 overflow-y-auto`}
    >
      <div className="h-24"></div>
      <SidebarItem label="Dashboards" />
      <SidebarItem label="Operation" />
      <SidebarItem label="Management" />
    </aside>
  );
};

export default Siderbar;
