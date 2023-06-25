import { NavLink } from "react-router-dom";
import "../styles.css";
export default function Header() {
  return (
    <div className="header">
      <NavLink className="styleReset headeritem">
        <h1>MyForum</h1>
      </NavLink>
    </div>
  );
}
