import { useState } from "react";
import postsApi from "@/api/posts";
import CommentsList from "./CommentsList";

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [isCommentsShow, setIsCommentsShow] = useState(false);
  const [noComments, setNoComments] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getComments(id) {
    setLoading(true);

    if (!comments.length && !noComments) {
      const list = await postsApi.getCommentsById(id);

      setComments(list);
      setNoComments(!list.length);
    }

    setIsCommentsShow(!isCommentsShow);
    setLoading(false);
  }

  return (
    <article className="posts-item border p-4 mb-sm-4 mb-3 rounded w-100 d-flex flex-column justify-content-start align-items-start">
      <h3 className="posts-item-title">{post.title}</h3>
      <p>{post.body}</p>

      <div
        className="posts-item-comments collapse w-100"
        id={"comments-" + post.id}>
        {noComments ? (
          <p className="mb-4">No comments</p>
        ) : (
          <div className="mb-4 w-100 bg-light rounded p-4 pb-2">
            <CommentsList comments={comments} />
          </div>
        )}
      </div>

      <button
        className="btn btn-dark ms-auto"
        data-bs-toggle="collapse"
        data-bs-target={"#comments-" + post.id}
        aria-expanded="false"
        aria-controls={"comments-" + post.id}
        onClick={() => getComments(post.id)}
        disabled={loading}>
        {isCommentsShow ? (
          <span>Hide comments</span>
        ) : (
          <span>Show comments</span>
        )}
      </button>
    </article>
  );
}

export default Post;
