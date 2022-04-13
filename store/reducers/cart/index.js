import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantity: 1,
        totalQty: 1
    },
    reducers: {
        addCart: (state, action) => {
            state.totalQty += 1
            state.quantity += 1
            const item = {
                ...action.payload,
                quantity: state.quantity,
                subtotal: action.payload.price * state.quantity
            }
            state.items.push(item)

        },
        removeCart: (state) => {
            state.quantity -= 1
            state.totalQty -= 1
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice;