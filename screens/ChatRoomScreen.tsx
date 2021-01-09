import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';


const ChatRoomScreen = () => {
    const route = useRoute();
    console.log(route)
    return (
        <Text>
            Chat Room
        </Text>
    )
};

export default ChatRoomScreen;
