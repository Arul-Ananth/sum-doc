import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  return <>{user ? <Dashboard /> : <Login onLogin={setUser} />}</>;
};

export default App;
