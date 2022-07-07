import { createSlice } from "@reduxjs/toolkit";

export const charSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    isLoading: false
  },
  reducers: {
    getCharactersFetch: (state) => {
      state.isLoading = true;
    },
    getCharactersSuccess: (state, action) => {
      state.characters = action.payload;
      state.isLoading = false;
    },
    getCharactersFailure: (state) => {
      state.isLoading = false;
    }
  }
})

export const { getCharactersFetch, getCharactersSuccess, getCharactersFailure } = charSlice.actions;

export default charSlice.reducer;