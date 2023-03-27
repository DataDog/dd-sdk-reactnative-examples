import {DdLogs} from '@datadog/mobile-react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import {Category, getCategories} from './api/categories';

function CategoryItem({category}: {category: Category}) {
  const {navigate} = useNavigation<any>();

  const navigateDog = () => {
    DdLogs.info('Try the info logs', {});
    DdLogs.warn('Warn about the warn logs', {});
    navigate('Products', {id: category.id});
  };
  return (
    <TouchableHighlight
      onPress={navigateDog}
      style={{alignSelf: 'stretch', height: 100}}>
      <ImageBackground
        source={{uri: category.cover}}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: 'salmon',
            fontSize: 80,
            top: 4,
            right: 2,
          }}>
          {category.title}
        </Text>
        <Text style={{color: 'papayawhip', fontSize: 80, position: 'absolute'}}>
          {category.title}
        </Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}

export function Categories() {
  const {data, isLoading} = useQuery('todos', getCategories);
  return (
    <View testID="email" style={{flex: 1}}>
      <FlatList
        ListEmptyComponent={
          isLoading ? <ActivityIndicator size="small" /> : null
        }
        renderItem={({item}) => <CategoryItem category={item} />}
        keyExtractor={item => item.id.toString()}
        data={data}
      />
      <Text style={{color: 'red', fontSize: 30}}>Who let the dogs out?</Text>
    </View>
  );
}
