import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnxaLanding from "../AnxaLanding";
import EarlyAccessPage from "./EarlyAccessPage";
import TalkToUsPage from "./TalkToUsPage";
import "../styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnxaLanding />} />
        <Route path="/early-access" element={<EarlyAccessPage />} />
        <Route path="/talk-to-us" element={<TalkToUsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
