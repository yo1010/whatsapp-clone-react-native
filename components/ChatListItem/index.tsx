import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import style from './style';

type Props = {
    chatRoom: ChatRoom;
}

const ChatListItem = ({ chatRoom }: Props) => {
    const navigation = useNavigation();

    const handlePress = () => navigation.navigate('ChatRoom', { id: chatRoom.id, name: chatRoom.users[1].name });
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={style.container}>
                <View style={style.leftContainer}>
                    <Image
                        source={{ uri: chatRoom.users[1].imageUri }}
                        style={style.avatar}
                    />
                    <View style={style.midContainer}>
                        <Text style={style.username}>{chatRoom.users[1].name}</Text>
                        <Text style={style.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <View style={style.rightContainer}>
                    <Text style={style.time}>
                        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;
