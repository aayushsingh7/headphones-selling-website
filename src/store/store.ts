import {configureStore} from '@reduxjs/toolkit'
import userSlice from '@/slice/userSlice'

export function createStore() {
     return configureStore({
        reducer:{
            user:userSlice
        }
     })
}

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch  = typeof store.dispatch