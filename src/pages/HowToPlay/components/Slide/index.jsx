import { useEffect } from "react";
import { useState } from "react";
import "./index.css";

export function Slide({ children, currentPage, index }) {
  let [display, setDisplay] = useState("block");

  useEffect(() => {
    if (currentPage === index) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  });

  return (
    <div className="slide" style={{ display }}>
      {children}
    </div>
  );
}
