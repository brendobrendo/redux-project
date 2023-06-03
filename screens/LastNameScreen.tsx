import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../src/redux/store';
import { clearJWT } from '../src/redux/slices/index';

const LastNameScreen = ({navigation}) => {
    // const jwt = useSelector((state: RootState) => state.app.jwt);
    // const url = useSelector((state: RootState) => state.app.createUrl);
    const jwt = useSelector((state: RootState) => state.app.jwt);
    const url = useSelector((state: RootState) => state.app.createUrl);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearJWT());
    }

    return (
        <View style={styles.container}>
            <Text>{jwt}</Text>
            <Text>{url}</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Logout"
                onPress={handleLogout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default LastNameScreen