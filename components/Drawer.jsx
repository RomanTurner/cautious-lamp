import React, { useState } from "react";
import "../styles/Drawer.module.css";

const Drawer = () => {
 
  let drawerClasses = "side-drawer";

    return (
      <div className={drawerClasses}>
        <h1>Hello, I'm sliding!</h1>
        <ul>
          <li>list item </li>
          <li>list item </li>
          <li>list item </li>
          <li>list item </li>
          <li>list item </li>
        </ul>
      </div>
    );
}

export default Drawer;

