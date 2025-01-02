import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh", background: "yellow" }}>
      <Header />
      <div style={{ height: "90vh", background: "red" }}>
        <Outlet />
      </div>
      <footer style={{ background: "black", color: "white", textAlign: "center", padding: "10px" }}>
        Footer Content
      </footer>
    </div>
  );
}

function Header() {
  return (
    <div style={{ background: "blue", color: "white", padding: "10px" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>
        Allen
      </Link>
      |
      <Link
        to="/neet/online-coaching-class-11"
        style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
      >
        Class 11
      </Link>
      |
      <Link
        to="/neet/online-coaching-class-12"
        style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
      >
        Class 12
      </Link>
    </div>
  );
}

function Landing() {
  return <div>Welcome to ALLEN</div>;
}

function Class11Program() {
  return <div>Class 11</div>;
}

function Class12Program() {
  return <div>Class 12</div>;
}

export default App;
