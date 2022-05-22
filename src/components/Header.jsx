import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPosts, fetchPosts } from "@/store/slices/posts";
import search from "@/assets/img/search.svg";

function Header() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function searchPostsByQuery(e) {
    dispatch(searchPosts(query));
    e.preventDefault();
  }

  useEffect(() => {
    if (!query) {
      dispatch(fetchPosts());
    }
  }, [query]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fs-4 fw-bold" href="#">
            Blog
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <img src={search} style={{ width: "20px", height: "24px" }} />
          </button>

          <div
            className="collapse navbar-collapse align-items-center"
            id="navbarSupportedContent">
            <form
              className="d-flex ms-auto mt-lg-0 mt-3"
              role="search"
              onSubmit={searchPostsByQuery}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onInput={(e) => setQuery(e.target.value)}
              />

              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
