import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmailExpired from "./components/EmailExpired";
import EmailSuccess from "./components/EmailSuccess";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/expired" element={<EmailExpired />} />
          <Route path="/success" element={<EmailSuccess />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
