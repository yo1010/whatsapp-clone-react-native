import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import chatRoomData from '../chats';
import ChatMessage from '../components/ChatMessage';


const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <FlatList 
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
        />
    )
};

export default ChatRoomScreen;
