import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {crashNativeMainThread} from 'react-native-performance-limiter';

export const CrashButton = () => {
  const onPressHandler = () => {
    crashNativeMainThread('We crashing');
  };
  return (
    <TouchableOpacity
      style={{backgroundColor: 'turquoise', borderRadius: 4, padding: 4}}
      onPress={onPressHandler}>
      <Text style={{fontSize: 16, color: 'white'}}>Crash</Text>
    </TouchableOpacity>
  );
};
