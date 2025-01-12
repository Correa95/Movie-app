import { TfiLayoutGrid2 } from "react-icons/tfi";
import { TbMovie } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <ul>
        <li>
          <TfiLayoutGrid2 />
        </li>
        <li>
          <TbMovie />
        </li>
        <li>
          <CiBookmark />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
