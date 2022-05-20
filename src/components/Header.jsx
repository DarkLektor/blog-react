import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPosts, fetchPosts } from "@/store/slices/posts";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function searchPostsByQuery(e) {
    dispatch(searchPosts(query));
    e.preventDefault();
  }

  function inputHandler(e) {
    setQuery(e.target.value);
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
            className={"navbar-toggler" + (showMenu ? " collapsed" : "")}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowMenu(!showMenu)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              "collapse navbar-collapse align-items-center pt-lg-0 pt-3" +
              (showMenu ? " show" : "")
            }
            id="navbarSupportedContent">
            <form
              className="d-flex ms-auto"
              role="search"
              onSubmit={searchPostsByQuery}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onInput={inputHandler}
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
