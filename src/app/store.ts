import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '@/features/movie-slice'
import userReducer from '@/features/user-slice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch