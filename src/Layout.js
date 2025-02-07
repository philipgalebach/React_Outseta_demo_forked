import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const activeClass = ({ isActive }) => (isActive ? "active" : "");

export default function Layout({ children }) {
  const {
    user,
    logout,
    openLogin,
    openSignup,
    openProfile,
    isLoading
  } = useAuth();

  return (
    <>
      <header>
        <h1>
          <NavLink to="/">Outseta React Demo</NavLink>
        </h1>
        {user && (
          <div>
            <strong>{user.FullName}:</strong>&nbsp;
            <button onClick={openProfile}>Profile</button>&nbsp;
            <button onClick={logout}>Logout</button>
          </div>
        )}

        {!user && !isLoading && (
          <div>
            <button onClick={openLogin}>Login</button>&nbsp;
            <button onClick={openSignup}>Signup</button>
          </div>
        )}
      </header>

      <nav>
        <NavLink className={activeClass} to="/">
          Home
        </NavLink>
        <NavLink className={activeClass} to="/another">
          Another Public Page
        </NavLink>
        <NavLink className={activeClass} to="/basic">
          Basic Content
        </NavLink>
        <NavLink className={activeClass} to="/pro">
          Pro Content
        </NavLink>
      </nav>

      <main>{children}</main>
    </>
  );
}
