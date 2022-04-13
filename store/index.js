import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './reducers/cart'

export default configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})