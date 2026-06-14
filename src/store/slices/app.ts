import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TabStackRoutesAndParameters } from '@WOPractical/constants';
import { BottomRouteName } from '@WOPractical/constants/routes';

export interface SavedFilter {
  status: string;
  gender: string;
}

export interface AppState {
  initialRouteName: keyof TabStackRoutesAndParameters;
  savedFilter: SavedFilter | null;
  favouritedCharacter: number[],
}

const initialState: AppState = {
  initialRouteName: BottomRouteName.CHARACTERS,
  savedFilter: {
    status: '',
    gender: '',
  },
  favouritedCharacter: []
}

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<keyof TabStackRoutesAndParameters>) => {
      state.initialRouteName = action.payload
    },
    setSavedFilter: (
      state,
      action: PayloadAction<{
        status: string;
        gender: string;
      }>
    ) => {
      state.savedFilter = action.payload;
    },
    favouritedCharacter: (state, action: PayloadAction<number[]>) => {
      state.favouritedCharacter = [...state.favouritedCharacter, ...action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTab, setSavedFilter, favouritedCharacter } = counterSlice.actions

export default counterSlice.reducer