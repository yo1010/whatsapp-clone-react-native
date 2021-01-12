import React, { useState } from 'react';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, TextInput, TouchableOpacity } from 'react-native';
import style from './style';

const InputBox = () => {
    const [message, setMessage] = useState('');

    const onMicrophonePress = () => console.warn('Microphone');

    const onSendPress = () => {
        console.warn('Send');
        setMessage('');
    };

    const onPress = () => !message ? onMicrophonePress() : onSendPress();

    return (
        <View style={style.container}>
            <View style={style.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={28} color="grey" />
                <TextInput
                    style={style.textInput}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    multiline
                    placeholder="Type a message"
                />
                <Entypo name="attachment" size={24} color="grey" style={style.icon} />
                {!message && <Fontisto name="camera" size={24} color="grey" style={style.icon} />}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={style.buttonContainer}>
                    {!message ?
                        <MaterialCommunityIcons
                            name="microphone"
                            size={28}
                            color="white" 
                        />  :
                        <MaterialIcons
                            name="send"
                            size={28}
                            color="white"
                        />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default InputBox;
