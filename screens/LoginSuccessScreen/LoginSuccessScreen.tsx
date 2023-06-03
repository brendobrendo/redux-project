import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/reducers';
import { WHITE, BANANA_YELLOW } from '../../src/util/colors';

const LoginSuccessScreen = ({navigation}) => {
    const jwt = useSelector((state: RootState) => state.app.jwt);
    const firstName = useSelector((state: RootState) => state.props.first_name);
    const lastName = useSelector((state: RootState) => state.props.last_name);
    const id = useSelector((state: RootState) => state.props.id);
    const [donationItems, setDonationItems] = useState([]);

    useEffect(() => {
        const fetchDonationItems = async () => {
            try {
                const response = await fetch(`https://api.thebegoodproject.org/donors/${id}/get_donations`, {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                });
                const data = await response.json();
                setDonationItems(data)
            } catch {
                console.error
            }
        }
        fetchDonationItems();
    }, [jwt]);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.food_name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.total_amount}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text>First Name: {firstName}</Text>
            <Text>Last Name: {lastName}</Text>
            <Text>Id: {id}</Text>
            <FlatList
                data={donationItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Go to Map"
                onPress={() => navigation.navigate('Map')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: BANANA_YELLOW,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
    }
});

export default LoginSuccessScreen