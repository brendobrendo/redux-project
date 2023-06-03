import { StyleSheet, Text, View } from 'react-native';


const DonationsScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Donations!</Text>
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

export default DonationsScreen