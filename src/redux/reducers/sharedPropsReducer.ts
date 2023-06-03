import { SharedProps } from "../store.types";
import { initialPropState } from "../slices/index";
import { UPDATE_SHARED_PROPS, PropsAction } from "../actions";

export const propsReducer = (state: SharedProps = initialPropState, action: PropsAction): SharedProps => {
    console.log('in props reducer', initialPropState);
    console.log('in props reducer', action.type);
    switch (action.type) {
        case UPDATE_SHARED_PROPS:
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email,
                id: action.payload.id
            }
        default:
            console.log('came into props default')
            return state;
    }
}