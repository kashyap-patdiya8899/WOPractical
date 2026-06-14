import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addFavourite as addFavouriteToDb,
  getAllFavourites,
  removeFavourite as removeFavouriteFromDb,
} from '@WOPractical/storage/favouritesDb';
import { Character } from '@WOPractical/types';

export interface FavouritesState {
  characters: Character[];
  isHydrated: boolean;
}

const initialState: FavouritesState = {
  characters: [],
  isHydrated: false,
};

export const loadFavourites = createAsyncThunk(
  'favourites/load',
  () => getAllFavourites(),
);

export const addFavourite = createAsyncThunk(
  'favourites/add',
  (character: Character) => {
    addFavouriteToDb(character);
    return character;
  },
);

export const removeFavourite = createAsyncThunk(
  'favourites/remove',
  (characterId: number) => {
    removeFavouriteFromDb(characterId);
    return characterId;
  },
);

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadFavourites.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.isHydrated = true;
      })
      .addCase(loadFavourites.rejected, state => {
        state.isHydrated = true;
      })
      .addCase(addFavourite.fulfilled, (state, action) => {
        const exists = state.characters.some(
          character => character.id === action.payload.id,
        );

        if (!exists) {
          state.characters.push(action.payload);
        }
      })
      .addCase(removeFavourite.fulfilled, (state, action) => {
        state.characters = state.characters.filter(
          character => character.id !== action.payload,
        );
      });
  },
});

export default favouritesSlice.reducer;
