import React from "react";
import styles from  "../styles/Drawer.module.css";

const Drawer = ({open}) => {
  let drawerClasses;
  open? drawerClasses = 'side-drawer' :  drawerClasses = 'styles.side-drawer open'

  console.table({
    open,
    dc: drawerClasses
  })

    return (
      <div className={styles[drawerClasses]}>
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

