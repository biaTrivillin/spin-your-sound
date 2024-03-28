import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/reset.css";
import MainRoutes from "./routes";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MainRoutes/>
    </React.StrictMode>,
);
