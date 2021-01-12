import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import { useNavigation } from '@react-navigation/native';
import style from './style';

type Props = {
    user: User;
}

const ContactListItem = ({ user }: Props) => {
    const navigation = useNavigation();

    const handlePress = () => navigation.navigate('ChatRoom', { user: user });
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={style.container}>
            <View style={style.leftContainer}>
                <Image source={{ uri: user.imageUri }} style={style.avatar}/>
    
                <View style={style.midContainer}>
                    <Text style={style.username}>{user.name}</Text>
                    <Text numberOfLines={2} style={style.status}>{user.status}</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;
