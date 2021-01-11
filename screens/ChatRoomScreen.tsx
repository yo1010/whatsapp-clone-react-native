import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, ImageBackground } from 'react-native';
import chatRoomData from '../chats';
import ChatMessage from '../components/ChatMessage';
import bg from '../assets/images/BG.png';
import InputBox from '../components/InputBox';


const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={bg}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />

            <InputBox />
        </ImageBackground>
    )
};

export default ChatRoomScreen;
