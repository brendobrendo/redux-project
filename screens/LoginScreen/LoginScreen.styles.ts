import { StyleSheet } from 'react-native';
import { BANANA_YELLOW } from '../../src/util/colors';
const SCREEN_HORIZONTAL_OFFSET = '25%';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexGrow: 1,
		flexShrink: 2,
		flexBasis: '27%',
		maxHeight: 300,
		justifyContent: 'center',
		backgroundColor: BANANA_YELLOW,
        paddingHorizontal: SCREEN_HORIZONTAL_OFFSET,
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
        marginTop: 10,
    },
    list: {
        marginTop: 20,
    }
})