import { useState } from "react";
import FirebaseAuthServices from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthServices.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipes</h1>
        <LoginForm existingUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App;
