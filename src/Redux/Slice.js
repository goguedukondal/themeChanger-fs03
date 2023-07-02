import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {mode:"Light"},
  reducers: {
   toggleTheme:(state)=>{
    state.mode=state.mode==="Light"?"Dark":"Light";
   }
  },
});

export const { toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
