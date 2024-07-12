import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BlogPost } from "@/app/types/blogTypes";

interface InitialState {
  allPosts: BlogPost[];
  postForm: BlogPost;
}

const initialState: InitialState = {
  allPosts: [],
  postForm: {
    title: "",
    content: "",
    coverImgUrl: "",
  },
};

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostTitle: (state: InitialState, payload: PayloadAction<string>) => {
      state.postForm.title = payload.payload;
    },
    setPostContent: (state: InitialState, payload: PayloadAction<string>) => {
      state.postForm.content = payload.payload;
    },
    setPostCoverImg: (state: InitialState, payload: PayloadAction<string>) => {
      state.postForm.coverImgUrl = payload.payload;
    },
    clearPostForm(state) {
      state.postForm.title = "";
      state.postForm.content = "";
      state.postForm.coverImgUrl = "";
    },
    setAllPost: (state: InitialState, payload: PayloadAction<BlogPost[]>) => {
      state.allPosts = payload.payload;
    },
  },
});
export const {
  clearPostForm,
  setAllPost,
  setPostContent,
  setPostCoverImg,
  setPostTitle,
} = PostSlice.actions;


const PostReducer = PostSlice.reducer;
export default PostReducer;
