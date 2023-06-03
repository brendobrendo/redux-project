export const UPDATE_LOCATION= 'location/setLocation';

interface UpdateLocationAction {
    type: typeof UPDATE_LOCATION;
    payload: {
        latitude: number;
        longitude: number
    }
};

export const updateLocation = (latitude: number, longitude: number): UpdateLocationAction => ({
    type: UPDATE_LOCATION,
    payload: {
        latitude,
        longitude
    }
});

export type LocationAction = UpdateLocationAction;