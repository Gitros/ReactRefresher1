import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Poster</h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          New Post
        </Link>
      </p>
    </header>
  );
}
