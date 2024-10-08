import { configureStore } from '@reduxjs/toolkit';
import bitcoinNetworkReducer from './slices/bitcoin-network.slice';
import ethereumNetworkSlice from './slices/ethereum-network.slice';

export const store = configureStore({
    reducer: {
        bitcoin: bitcoinNetworkReducer,
        ethereum: ethereumNetworkSlice
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
