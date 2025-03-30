import React, { useState } from "react";
import HomePage from "./HomePage";
import Login from "./Login"; // Assuming you have a Login component

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login /> : <HomePage onLoginClick={() => setShowLogin(true)} />}
    </>
  );
}

export default App;
