import React from "react";
import Nav from "../../Nav/Nav";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
