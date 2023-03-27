import React from 'react';
import {Text, Button, NativeModules} from 'react-native';

export const ConfirmationScreen = () => {
  return (
    <>
      <Text>This is a confirmation screen</Text>
      <Button
        title="Start native screen"
        onPress={() => NativeModules.CustomView.startView()}
      />
    </>
  );
};
