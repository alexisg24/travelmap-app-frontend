
import { createSlice } from '@reduxjs/toolkit'
enum AuthStatus {
  checking = 'checking',
  authenticated = 'authenticated',
  notAuthenticated = 'notAuthenticated'
}
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: AuthStatus.checking,
    user: {},
    errorMessage: null
  },
  reducers: {
    onChecking: (state, _action) => {
      state.status = AuthStatus.checking
      state.user = {}
      state.errorMessage = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { onChecking } = authSlice.actions
