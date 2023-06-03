import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../src/redux/store';
import { BANANA_YELLOW } from '../src/util/colors'

const HelloScreen = ({navigation}) => {
    const firstName = useSelector((state: RootState) => state.user.firstName);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    const handleAPICall = async () => {
        const response = await fetch('https://api.thebegoodproject.org/donors?items=100&page=1', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbl9pZCI6M30.ilRBzZ6Km56MRVjR5i4FuoYfZSvUdkM66Q25KYaFtcU',
            }
        });
        const data = await response.json();
        setUsers(data)
    }

    useEffect(() => {
        handleAPICall();
    }, []);

    return (
        <View style={styles.container}>
            <Text>{firstName}</Text>
            <Pressable
                onPress={() => navigation.navigate('LastName')}
                style={styles.button}
            >
                <Text>Go to Last Name</Text>
            </Pressable>
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
                <Text>Make API Call</Text>
            </Pressable>
            <View style={styles.list}>
                {users.map((user, index) => (
                    <View key={index}>
                        <Text>{user.first_name} {user.last_name}</Text>
                    </View>
                ))}
            </View>
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
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "grey",
    },
    button: {
        backgroundColor: BANANA_YELLOW,
        width: '80%',
        padding: 15,
        borderRadius: 10,
        marginRight: 10
    },
    list: {
        marginTop: 20,
    }
});

export default HelloScreen



