import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from 'react-native';
// import {crashNativeMainThread} from 'react-native-performance-limiter';
import {useQuery} from 'react-query';
import {getProducts, Product} from './api/products';
import {useCart} from './Cart/Cart';

const ProductItem = ({product}: {product: Product}) => {
  const {addProduct} = useCart();
  return (
    <TouchableHighlight
      // onPress={() => {
      //   crashNativeMainThread('custom error message');
      // }}
      onPress={() => {
        addProduct(product);
      }}
      style={{alignSelf: 'stretch', height: 160}}>
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
    </TouchableHighlight>
  );
};

export const Products = ({route}: any) => {
  const {data, isLoading} = useQuery(['products', route.params.id], () =>
    getProducts(route.params.id),
  );

  return (
    <View>
      <FlatList
        ListEmptyComponent={
          isLoading ? <ActivityIndicator size="small" /> : null
        }
        renderItem={item => <ProductItem product={item.item} />}
        keyExtractor={item => item.id.toString()}
        data={data}
        ItemSeparatorComponent={() => (
          <View style={{height: 2, backgroundColor: 'salmon'}} />
        )}
      />
    </View>
  );
};
