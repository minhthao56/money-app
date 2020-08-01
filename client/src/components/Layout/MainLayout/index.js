import React from "react";
import Nav from "../../Nav/Nav";

export default function MainLayout({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
