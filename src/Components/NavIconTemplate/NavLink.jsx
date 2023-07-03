import "./NavLink.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavLink = ({ Icon, title, onClick }) => {
  return (
    <div className="nav" onClick={onClick}>
      {Icon && <Icon className="icon" />}
      {/* <h2>{title ? title : null}</h2> */}
      <Link to='/'>{title}</Link>
    </div>
  );
};

export default NavLink;