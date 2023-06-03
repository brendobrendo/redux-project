import { UserState } from '../store';
import { initialState } from '../slices/index';
import { UPDATE_FIRST_NAME, UserAction } from '../actions/index';

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UPDATE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload.firstName,
            };
        default:
            return state;
    }
}