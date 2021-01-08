import React from 'react';
import { View, Text } from 'react-native';
import { ChatRoom } from '../../types';

type Props = {
    chatRoom: ChatRoom;
}

const ChatListItem = ({ chatRoom }: Props) => {
    return (
        <View>
            <Text>{chatRoom.lastMesage.content}</Text>
        </View>
    )
};

export default ChatListItem;
