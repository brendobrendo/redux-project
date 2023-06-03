import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../store.types';

export const initialState: UserState = {
    firstName: 'Brendan',
    lastName: 'Smith',
    age: 32,
    email: 'brendan.smith903@gmail.com',
    awardsWon: 3
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName(initialState, action: PayloadAction<string>) {
            initialState.firstName = action.payload;
        },
        setEmail(initialState, action: PayloadAction<string>) {
            initialState.email = action.payload;
        }
    }
});


export const { setFirstName, setEmail } = userSlice.actions;