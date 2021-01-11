import React, { useState } from 'react';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TextInput } from 'react-native';
import style from './style';

const InputBox = () => {
    const [message, setMessage] = useState('');

    return (
        <View style={style.container}>
            <View style={style.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={28} color="grey" />
                <TextInput
                    style={style.textInput}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    multiline
                />
                <Entypo name="attachment" size={24} color="grey" style={style.icon} />
                <Fontisto name="camera" size={24} color="grey" style={style.icon} />
            </View>
            <View style={style.buttonContainer}>
                <MaterialCommunityIcons
                    name="microphone"
                    size={28}
                    color="white" 
                />
            </View>
        </View>
    )
};

export default InputBox;
