import {DdLogs} from '@datadog/mobile-react-native';
import {useNavigation} from '@react-navigation/native';
import notifee, {
  AuthorizationStatus,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
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
        ListFooterComponent={NotificationButtons}
      />
    </View>
  );
}

const NotificationButtons = () => {
  const requestPermissions = async () => {
    try {
      const settings = await notifee.requestPermission();
      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        Alert.alert('Permission settings:', JSON.stringify(settings));
      } else {
        Alert.alert('User declined permissions');
      }
    } catch (e) {
      Alert.alert('failed', e.message);
    }
  };

  const scheduleNotification = async (minutes: number) => {
    const now = new Date();
    const nowMinutes = now.getMinutes();

    // Adding more than 60 minutes will add more hours
    now.setMinutes(nowMinutes + minutes);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: now.getTime(),
    };

    await notifee.createTriggerNotification(
      {
        title: `Notification that was delayed by ${minutes} min`,
        body: 'Heeeey this is a great notification',
      },
      trigger,
    );
  };

  return (
    <>
      <Button
        title="Request notification permissions blabal"
        onPress={() => {
          requestPermissions();
        }}
      />
      <Button
        title="Schedule notification in 1 minute"
        onPress={() => {
          scheduleNotification(1);
        }}
      />
      <Button
        title="Schedule notification in 25 minutes"
        onPress={() => {
          scheduleNotification(25);
        }}
      />
      <Button
        title="Schedule notification in 8 hours"
        onPress={() => {
          scheduleNotification(8 * 60);
        }}
      />
    </>
  );
};
