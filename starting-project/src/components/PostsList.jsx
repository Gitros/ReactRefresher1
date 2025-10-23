import { useState } from "react";
import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Manuel" body="React.js is awesome lol!" />
      </ul>
    </>
  );
}
