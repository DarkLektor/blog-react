function CommentsList({ comments }) {
  return comments.map((comment, index) => (
    <article
      key={comment.id}
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
}

export default CommentsList;
