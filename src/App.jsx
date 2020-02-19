import React from "react";
import Tabs from "./components/Tabs/Tabs";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import "./App.css";

const tabData = [
  {
    label: "Login",
    content: <LoginForm />
  },
  {
    label: "Signup",
    content: <SignupForm />
  }
];

function App() {
  return (
    <div className="container">
      <div className="App">
        <Tabs data={tabData} />
      </div>
    </div>
  );
}

export default App;
