// import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/reset.css";
import MainRoutes from "./routes";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <RecoilRoot>
        <MainRoutes/>
    </RecoilRoot>
    // </React.StrictMode>,
);
