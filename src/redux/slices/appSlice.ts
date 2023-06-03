import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../store.types';

export const initialAppState: InitialState = {
    userIdentity: 'donor',
    apiBaseUrl: 'https://api.thebegoodproject.org',
    loginUrl: '/donor_auth',
    createUrl: '/donors/create',
    alert: undefined,
    donationsOrClaims: [],
    jwt: undefined,
    user: undefined
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setJWT(state, action: PayloadAction<string>) {
            console.log('came into setJwt');
            return { ...state, jwt: action.payload}
        },
        clearJWT(state) {
            return { ...state, jwt: undefined}
        }
    }
});

export const { setJWT, clearJWT } = appSlice.actions;