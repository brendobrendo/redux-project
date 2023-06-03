import { Location } from '../../src/redux/store.types';
import { Region } from 'react-native-maps';

export interface BananaMapProps {
	// donations: { } [];
	// markerSize: number;
	clientLocation: Location;
	mapRegion: Region;
}