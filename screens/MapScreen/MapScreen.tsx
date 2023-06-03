import React, { useState } from 'react';
import { BananaMap } from "../../elements/BananaMap";
import { Dimensions, View } from 'react-native';
import { RootState } from '../../src/redux/store';
import { useSelector } from 'react-redux';
import { NavBar } from '../../elements';

const MapScreen = () => {
    const { width, height } = Dimensions.get('window');
    const LATITUDE_DELTA = 0.05;
    const ASPECT_RATIO = width / height;
    const { latitude, longitude } = useSelector((state: RootState) => state.location);
    const [ location ] = useState(
        {
            latitude,
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
        }
    );

    return (
        <View>
            <NavBar />
            <BananaMap mapRegion={location} clientLocation={{ latitude, longitude}}/>
        </View>
    )
}

export default MapScreen;