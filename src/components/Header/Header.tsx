import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container flex items-center min-h-[40px] p-4 w-full rounded-[18px] shadow-custom-inset">
      <nav>
        <ul className="flex gap-[20px] text-[28px]">
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
