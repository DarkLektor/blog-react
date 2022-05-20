import { useState } from "react";
import postsApi from "@/api/posts";

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [noComments, setNoComments] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getComments(id) {
    setLoading(true);

    if (comments.length === 0 && !noComments) {
      const list = await postsApi.getCommentsById(id);

      setNoComments(list.length === 0);
      setComments(list);
    }

    setShowComments(!showComments);
    setLoading(false);
  }

  const commentsList = comments.map((comment, index) => (
    <article
      key={index}
      className={
        "border-bottom " +
        (comments.length - 1 === index ? "border-bottom-0 " : "") +
        (index !== 0 ? "pt-2" : "")
      }>
      <a href="#" className="fw-semibold text-decoration-none">
        {comment.user.username}
      </a>
      <p className="my-2">{comment.body}</p>
    </article>
  ));

  return (
    <article className="posts-item border p-4 mb-sm-4 mb-3 rounded w-100 d-flex flex-column justify-content-start align-items-start">
      <h3 className="posts-item-title">{post.title}</h3>
      <p>{post.body}</p>

      {showComments && !noComments && (
        <div className="posts-item-comments mb-4 w-100 bg-light rounded p-4 pb-2">
          {commentsList}
        </div>
      )}

      {noComments && <p className="mb-4">No comments</p>}

      <button
        className="btn btn-dark ms-auto"
        onClick={() => getComments(post.id)}
        disabled={loading}>
        {showComments ? <span>Hide comments</span> : <span>Show comments</span>}
      </button>
    </article>
  );
}

export default Post;
