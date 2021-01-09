import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import { Text, View } from '../components/Themed';
import chatRooms from '../chatRooms';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
