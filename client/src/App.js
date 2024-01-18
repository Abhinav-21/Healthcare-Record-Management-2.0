import React from "react";
import AdminLogin from "./pages/temp/AdminLogin.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
