import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineRocket } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import "../styles.css";

export default function Aside() {
  const navigate = useNavigate();
  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <NavLink className="styleReset linkitem" onClick={() => navigate("/")}>
          <AiOutlineHome size={30} />
          <span>Home</span>
        </NavLink>
        <NavLink className="styleReset linkitem">
          <AiOutlineRocket size={30} />
          <span>Explore</span>
        </NavLink>
        <NavLink className="styleReset linkitem" size={30}>
          <BsBookmark />
          <span>BookMark</span>
        </NavLink>
        <NavLink className="styleReset linkitem" size={30}>
          <MdOutlineAccountCircle />
          <span>Profile</span>
        </NavLink>
      </nav>
    </div>
  );
}
