import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      <nav>
        <p>Home</p>
        <p>
          <NavLink to="dashboard">Dashboard</NavLink>
        </p>
        <p>
          <NavLink to="signin">Sign In</NavLink>
        </p>
      </nav>
    </div>
  );
}
