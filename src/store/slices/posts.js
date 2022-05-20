import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsApi from "@/api/posts";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (page = 1) => {
    const data = await postsApi.getPosts(page);
    return data;
  }
);

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (query) => {
    const data = await postsApi.searchPosts(query);
    return data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    page: 1,
    showNextPageBtn: false,
  },

  reducers: {
    incrementPage(state) {
      state.page = state.page + 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts =
          state.page === 1
            ? action.payload
            : [...state.posts, ...action.payload];

        state.showNextPageBtn = action.payload.length === 10;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts = [];
        state.showNextPageBtn = false;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.page = 1;
        state.showNextPageBtn = false;
      })
      .addCase(searchPosts.rejected, (state) => {
        state.posts = [];
        state.showNextPageBtn = false;
      });
  },
});

export const { setPosts, setPage, incrementPage, setShowNextPageBtn } =
  postsSlice.actions;

export default postsSlice.reducer;
