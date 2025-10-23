import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

export default function PostList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Manuel" body="React.js is awesome lol!" />
      </ul>
    </>
  );
}
