import { createSlice, configureStore } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: {
      id: "",
      name: "John Doe",
    },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    editCurrentUser: (state, action) => {
      const { key, value } = action.payload;

      state.user[key] = value;
    },
  },
});

const actions = currentUserSlice.actions;
const currentUserReducer = currentUserSlice.reducer;
const store = configureStore({ reducer: currentUserSlice.reducer });

export { currentUserSlice, actions, currentUserReducer, store };
