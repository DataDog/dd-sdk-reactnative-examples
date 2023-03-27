import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const ListButton = () => {
  const {navigate} = useNavigation<any>();
  return (
    <TouchableOpacity
      style={{backgroundColor: 'turquoise', borderRadius: 4, padding: 4}}
      onPress={() => navigate('ListPage')}>
      <Text style={{fontSize: 16, color: 'white'}}>List</Text>
    </TouchableOpacity>
  );
};
