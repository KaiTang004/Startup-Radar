import { Link } from "react-router-dom";
import "./AccountNavigation.css";

export default function AccountNavigation() {
  return (
    <nav className="account-nav" aria-label="Account">
      <Link className="account-button account-button-secondary" to="/login">Log in</Link>
      <Link className="account-button account-button-primary" to="/create-account">Create account</Link>
    </nav>
  );
}

