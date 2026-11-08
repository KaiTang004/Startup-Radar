import { useState } from "react";
import AccountCard from "../components/AccountCard";
import "./LoginPage.css";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  return (
    <AccountCard title="Welcome back" description="Log in to continue discovering your next perfect match.">
            <form className="login-form" onSubmit={(event) => {
              event.preventDefault();
              setMessage("Login is not connected yet. Your credentials have not been sent or saved.");
            }}>
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" placeholder="Enter your username" required />
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
              <button className="account-button account-button-primary" type="submit">Log in</button>
              {message && <p className="login-message" role="status">{message}</p>}
            </form>
    </AccountCard>
  );
}
