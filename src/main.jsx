import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContentProvider>
          <App />
        </SocketContentProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
