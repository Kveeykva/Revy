import { configureStore } from "@reduxjs/toolkit";
import storySlice from "./Slices/storySlice";

export default configureStore({
  reducer: {
    story: storySlice,
  },
});
