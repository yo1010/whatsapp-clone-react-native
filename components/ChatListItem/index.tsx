import React from 'react';
import { View, Text, Image } from 'react-native';
import { ChatRoom } from '../../types';
import style from './style';

type Props = {
    chatRoom: ChatRoom;
}

const ChatListItem = ({ chatRoom }: Props) => {
    console.log(chatRoom)
    return (
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
                <Text style={style.time}>Yesterday</Text>
            </View>
        </View>
    )
};

export default ChatListItem;
