import { UserState } from '../store';

export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';

interface UpdateFirstNameAction {
    type: typeof UPDATE_FIRST_NAME;
    payload: {
        firstName: string;
    }
}

export type UserAction = UpdateFirstNameAction;

export const updateFirstName = (firstName: string): UpdateFirstNameAction => ({
    type: UPDATE_FIRST_NAME,
    payload: {
        firstName
    }
});