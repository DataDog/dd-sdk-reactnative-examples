import React from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {
  blockJavascriptThread,
  blockNativeMainThread,
} from 'react-native-performance-limiter';

export const CompletionDetails = ({navigation}) => {
  return (
    <View>
      <Text>Tell us more about your day</Text>
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 2,
          padding: 2,
          marginVertical: 20,
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate('ConfirmationScreen');
        }}
        title="Go to next screen"
      />
      <Button
        onPress={() => {
          blockJavascriptThread(1000);
        }}
        title="JS long task"
      />
      <Button
        onPress={() => {
          blockNativeMainThread(1000);
        }}
        title="Native long task"
      />
    </View>
  );
};
