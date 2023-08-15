import { configureStore } from '@reduxjs/toolkit'
import { authSlice, placesSlice, routesSlice } from './'

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    placesSlice: placesSlice.reducer,
    routesSlice: routesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
