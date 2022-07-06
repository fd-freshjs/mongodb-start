import { useState } from "react";
import Chat from "./components/Chat";
import AuthPage from "./pages/AuthPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Chat /> : <AuthPage setUser={setUser} />}
    </div>
  );
}

export default App;
