import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEthereumNetworkState } from 'src/models/ethereum-network.models';

const initialState: IEthereumNetworkState = {
    value: 0
};

export const ethereumNetworkSlice = createSlice({
    name: 'ethereum',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ethereumNetworkSlice.actions;

export default ethereumNetworkSlice.reducer;
