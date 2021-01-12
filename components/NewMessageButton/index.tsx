import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import style from './style';

const NewMessageButton = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Contacts');
    }
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons
                    name="message-reply-text"
                    size={28}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    )
};

export default NewMessageButton;
