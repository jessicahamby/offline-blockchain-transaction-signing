import React from "react";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate({ provider: "walletconnect" })}>Authenticate</button>
      </div>
    );
  }

  console.log("USER", isAuthenticated)

  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
      {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
      <pre>
        <code>
          {JSON.stringify(user, null, 2)}
        </code>
      </pre>
    
    </div>
  );
}

export default App;
