import { createSlice } from '@reduxjs/toolkit'
export const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    isLoadingRoutes: true,
    routes: [],
    activeRoute: null,
    prevPage: null,
    nextPage: null,
    maxPages: null
  },
  reducers: {
    onLoadRoutes: (state, _action) => {
      state.isLoadingRoutes = true
      state.routes = []
      state.activeRoute = null
      state.prevPage = null
      state.nextPage = null
      state.maxPages = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { onLoadRoutes } = routesSlice.actions
