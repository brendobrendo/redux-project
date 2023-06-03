import { combineReducers } from "redux";
import { userReducer } from './userReducer';
import { appReducer } from "./appReducer";
import { propsReducer } from "./sharedPropsReducer";
import { locationReducer } from "./locationReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    props: propsReducer,
    location: locationReducer
})

export type RootState = ReturnType<typeof rootReducer>;