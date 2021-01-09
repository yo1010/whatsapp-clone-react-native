import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        padding: 12
    },
    leftContainer: {
        flexDirection: 'row'
    },
    midContainer: {
        justifyContent: 'space-evenly'
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50
    },
    username: {
        fontWeight: 'bold',
        fontSize: 17
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey'
    },
    time: {
        fontSize: 14,
        color: 'grey'
    }
});

export default style;