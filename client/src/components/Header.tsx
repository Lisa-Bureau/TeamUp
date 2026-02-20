import { Link, NavLink } from "react-router";
import "../styles/Header.css";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { auth } = useAuth();

  return (
    <header className="header-navbar">
      <div>
        <p>Bonjour</p>
        {auth && <p>{auth.user.username}</p>}
      </div>
      <NavLink to="/">
        <img src="/logo.png" alt="logo team up" />
      </NavLink>
      {auth && (
        <NavLink
          to="/messenger"
          className={({ isActive }) =>
            isActive ? "btn-chat btn-chat-active" : "btn-chat"
          }
        >
          <img src="/icons/message.png" alt="icon message" />
        </NavLink>
      )}
    </header>
  );
}

export default Header;
