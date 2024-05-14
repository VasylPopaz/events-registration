import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container flex items-center min-h-[40px] p-4 border-b border-b-[#dec3c3] rounded-[10px]">
      <nav>
        <ul className="flex gap-[10px] text-[28px]">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/board">
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
