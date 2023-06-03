import { Location } from '../store.types';
import { initialLocationState } from '../slices/index';
import { UPDATE_LOCATION, LocationAction } from '../actions';

export const locationReducer = (state: Location = initialLocationState, action: LocationAction): Location => {
    console.log(action.type);
    switch (action.type) {
        case UPDATE_LOCATION:
            console.log('I came in the UPDATE_LOCATION case');
            return {
                ...state
            };
        default:
            console.log('I came in the default location case');
            return state;
    }
}