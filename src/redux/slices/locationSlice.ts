import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../store.types';

export const initialLocationState: Location = {
    latitude: 47.6205,
    longitude: -122.3493 
};

const locationSlice = createSlice({
    name: 'location',
    initialState: initialLocationState,
    reducers: {
        setLocation(state) {
            return { ...state}
        }
    }
});

export const { setLocation } = locationSlice.actions;