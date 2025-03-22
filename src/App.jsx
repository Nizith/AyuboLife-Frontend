import React from "react"
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function Layout({ children }) {
  const location = useLocation();
  const hideSidebar = location.pathname === '/';

  return (
    <div className="App">
      {!hideSidebar && <Sidebar />}
      <div className={!hideSidebar ? "ml-[270px]" : ""}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
