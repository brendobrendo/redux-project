import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SharedProps } from '../store.types';

export const initialPropState: SharedProps = {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    id: undefined, 
};

const propSlice = createSlice({
    name: 'props',
    initialState: initialPropState,
    reducers: {
        setProps(state, action: PayloadAction<string>) {
            console.log('props result', action.payload);
            return { ...state, first_name: action.payload.first_name,
            last_name: action.payload.last_name, email: action.payload.email,
            id: action.payload.id}
        }
    }
})

export const { setProps } = propSlice.actions;