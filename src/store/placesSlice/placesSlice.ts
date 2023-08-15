import { createSlice } from '@reduxjs/toolkit'
export const placesSlice = createSlice({
  name: 'places',
  initialState: {
    isLoadingPlaces: true,
    places: [],
    activePlace: null,
    prevPage: null,
    nextPage: null,
    maxPages: null
  },
  reducers: {
    onLoadPlaces: (state, _action) => {
      state.isLoadingPlaces = true
      state.places = []
      state.activePlace = null
      state.prevPage = null
      state.nextPage = null
      state.maxPages = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { onLoadPlaces } = placesSlice.actions
