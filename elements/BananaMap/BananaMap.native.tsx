import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './BananaMap.styles';
import { BananaMapProps } from './BananaMapsProps';

const BananaMap = ({
    clientLocation, mapRegion
}: BananaMapProps) => {
    return (
        <MapView
            initialRegion={mapRegion}
            style={styles.map}
        >
            <Marker coordinate={clientLocation} />
        </MapView>
    )
}

export default BananaMap;