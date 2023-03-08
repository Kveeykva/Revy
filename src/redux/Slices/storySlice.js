import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
  name: "story",
  reducers: {
    setStory(state, action) {
      state.userStory = { ...state.userStory, ...action.payload };
    },
    completeStory: (state) => {
      state.userStory.isCompleted = true;
    },
    storyWatched: (state, action) => {
      const storyId = action.payload.storyId;
      const story = state.userStory.story.find((story) => story.id === storyId);
      if (story) {
        story.seen = true;
      }
      state.userStory.currentIndex = 0;
    },
    setIndex: (state, action) => {
      state.userStory.currentIndex = action.payload;
    },
  },

  initialState: {
    userStory: {
      currentIndex: 0,
      isCompleted: false,
      userName: "Revy",
      follower: "6956",
      followed: "27,7m",
      followerText: "Takipçi",
      followedText: "Takip Ediyor",
      userImage: "https://www.resimupload.org/images/2023/03/08/renvyPP.png",
      time: "3h",
      story: [
        {
          id: 0,
          image: "https://www.resimupload.org/images/2023/03/08/story1.png",
          seen: false,
        },
        {
          id: 1,
          image: "https://www.resimupload.org/images/2023/03/08/story2.png",
          seen: false,
        },
        {
          id: 2,
          image: "https://www.resimupload.org/images/2023/03/08/story3.png",
          seen: false,
        },
        {
          id: 3,
          image: "https://www.resimupload.org/images/2023/03/08/story4.png",
          seen: false,
        },
      ],
    },
  },
});

export const { setStory, completeStory, storyWatched, setIndex } =
  storySlice.actions;

export const selectStory = (state) => state.story;

export default storySlice.reducer;
