import Card from "./Card"
import Test from "./Test"
import { projects } from '../data/projects'
import React, { useState } from "react"
import styles from '../styles/Feed.module.css'

function Feed() {
  const [open, isOpen] = useState("card")

  const testFunc = (args) => {
    const testObj = {
      test: <Test key={args.id} {...args} />,
      card: <Card key={args.id} {...args} />,
    };
    return testObj[open];
  };

  const handleClick = () => open === "card" ? isOpen("test") : isOpen("card")
  
  return (
      <>
      <div className={styles.grid}>
        {projects.map((project) => {
          return testFunc(project);
        })}
       
      </div>
      <button onClick={() => handleClick()}>Open Drawer</button>
      </>
    );
}

export default Feed
