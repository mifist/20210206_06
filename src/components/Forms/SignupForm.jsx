import React from "react";

function SignupForm() {
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

      <div className="label-hidden">
        <label htmlFor="login:password-confirm">Confirm Password</label>
      </div>
      <input
        id="login:password-confirm"
        className="inputField"
        required
        type="password"
        placeholder="Confirm Password"
      />

      <button className="btn btn_icon">Sign Up</button>
    </form>
  );
}

export default SignupForm;
