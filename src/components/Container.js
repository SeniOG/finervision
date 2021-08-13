import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <div class="container"><div class="accordion-container">{props.children}</div></div>
  );
}

export default Container;