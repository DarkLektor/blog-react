import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, incrementPage } from "@/store/slices/posts";
import { useEffect } from "react";
import Post from "@/components/Post";

function Main() {
  const { posts, page, showNextPageBtn } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const updatePage = () => dispatch(incrementPage());

  useEffect(() => {
    if (page !== 1) dispatch(fetchPosts(page));
  }, [page]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <main className="posts container py-4 d-flex flex-column justify-content-start align-items-start">
      <h1 className="mb-4">Posts</h1>
      {!posts.length && (
        <p className="fs-5">There are no suitable posts for this criteria</p>
      )}

      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}

      {showNextPageBtn && (
        <button
          onClick={updatePage}
          className="btn btn-dark ms-auto"
          v-if="showNextPageBtn">
          More posts
        </button>
      )}
    </main>
  );
}

export default Main;
