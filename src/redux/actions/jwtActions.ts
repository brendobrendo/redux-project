export const UPDATE_JWT= 'app/setJWT';

interface UpdateJWTAction {
    type: typeof UPDATE_JWT;
    payload: {
        jwt: string;
    }
}

export const updateJWT = (jwt: string): UpdateJWTAction => ({
    type: UPDATE_JWT,
    payload: {
        jwt
    }
});

export const CLEAR_JWT = 'app/clearJWT';

interface ClearJWTAction {
    type: typeof CLEAR_JWT;
    payload: {
        jwt: undefined;
    }
}

export const clearJWT = (jwt: undefined): ClearJWTAction => ({
    type: CLEAR_JWT,
    payload: {
        jwt
    }
});


export type JWTAction = UpdateJWTAction | ClearJWTAction;