import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manuel" body="React.js is awesome lol!" />
    </ul>
  );
}
