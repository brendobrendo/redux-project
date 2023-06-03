import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>;
export default store;