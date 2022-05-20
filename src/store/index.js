import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "./slices/posts";

export default configureStore({ reducer: { posts: postsSlice } });
