import React from "react";

function LoginForm() {
  return (
    <form>
      <div className="label-hidden">
        <label htmlFor="login:email">Email:</label>
      </div>
      <input
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
        required
        type="text"
      />

      <div className="label-hidden">
        <label htmlFor="login:password">Password:</label>
      </div>
      <input
        id="login:password"
        className="inputField"
        required
        type="password"
        placeholder="Password"
      />

      <button className="btn btn_icon">Log in</button>
    </form>
  );
}

export default LoginForm;
