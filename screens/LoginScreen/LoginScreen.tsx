import { Title } from '../../elements/Title';
import { useState } from 'react';
import { Text, View, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './LoginScreen.styles';
import { setJWT, setProps } from '../../src/redux/slices/index';
import { useDispatch } from 'react-redux';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    

    const handleAPICall = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                'donor': {
                    email: email,
                    password: password
                }
            })
        }

        try {
            const response = await fetch('https://api.thebegoodproject.org/donor_auth', requestOptions);
            const data = await response.json();
            const jwtAction = setJWT(data.jwt);
            await console.log('jwtAction', jwtAction);
            await dispatch(jwtAction);
            const propsAction = await setProps(data.donor);
            await dispatch(propsAction);
            await navigation.navigate('DonorDrawer', {screen: 'LoginSuccess'});
        } catch (error) {
            console.log('I came into handleAPIError')
            console.error(error);
        }
    }

    const handleRegistration = () => console.log('REGISTER');

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.header}>
                <Title text={'banana \ndonor'} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                />
            </View>
            <Pressable
                onPress={handleAPICall}
                style={styles.button}
            >
                <Text>Login</Text>
            </Pressable>
            <Pressable
                onPress={handleRegistration}
                style={styles.button}
            >
                <Text>Register</Text>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen