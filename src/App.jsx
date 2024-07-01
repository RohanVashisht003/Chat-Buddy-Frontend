import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAuthContext } from "./context/AuthContext";
import { Routes, Navigate, Route } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
