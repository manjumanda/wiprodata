import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
