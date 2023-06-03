export const UPDATE_SHARED_PROPS = 'props/setProps';

interface UpdatePropsAction {
    type: typeof UPDATE_SHARED_PROPS;
    payload: {
        first_name: string;
        last_name: string;
        email: string;
        id: number;
    }
}

export const updateProps = (first_name: string, last_name: string,
    email: string, id: number): UpdatePropsAction => ({
    type: UPDATE_SHARED_PROPS,
    payload: {
        first_name,
        last_name,
        email,
        id
    }
});

export type PropsAction = UpdatePropsAction;