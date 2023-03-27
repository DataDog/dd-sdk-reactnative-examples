import {View, FlatList, Text, ImageBackground} from 'react-native';
import React from 'react';
import {useCart} from './Cart/Cart';
import {CartProduct} from './Interfaces/interface';

function ListItem({product}: {product: CartProduct}) {
  return (
    <View style={{alignSelf: 'stretch', height: 160}}>
      <ImageBackground
        source={{uri: product.cover}}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(139,75,61,0.6)',
            alignSelf: 'flex-end',
            width: 200,
            padding: 4,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'papayawhip', fontSize: 24, textAlign: 'right'}}>
            {product.name}
          </Text>
          <Text style={{color: 'beige', fontSize: 20, textAlign: 'right'}}>
            ${product.price}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
const ListPage = () => {
  const product = useCart(state => state.products);
  return (
    <View>
      <FlatList
        data={Object.values(product)}
        renderItem={item => {
          return <ListItem product={item.item} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export {ListPage};
