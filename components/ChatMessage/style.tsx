import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    messageBox: {
        marginRight: 50,
        borderRadius: 5,
        padding: 10
    },
    name: {
        color: Colors.light.tint, 
        fontWeight: 'bold',
        marginBottom: 5
    },
    message: {
        marginBottom: 10
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
        fontSize: 12
    }
});

export default styles;