import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        alignItems: 'flex-end'
    }, 
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        marginRight: 10,
        borderRadius: 25,
        flex: 1,
        alignItems: 'flex-end'
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50, 
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        padding: 10
    },
    icon: {
        marginHorizontal: 5
    }
});

export default style;