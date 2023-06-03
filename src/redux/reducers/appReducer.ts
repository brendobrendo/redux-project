import { InitialState } from '../store.types';
import { initialAppState } from '../slices/index';
import { UPDATE_JWT, CLEAR_JWT, JWTAction } from '../actions/index';

export const appReducer = (state: InitialState = initialAppState, action: JWTAction): InitialState => {
    console.log(action.type);
    switch (action.type) {
        case UPDATE_JWT:
            return {
                ...state,
                jwt: action.payload,
            };
        case CLEAR_JWT:
            return {
                ...state,
                jwt: action.payload,
            }
        default:
            return state;
    }
}