import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Dimensions, TextInput, Image} from 'react-native';
// eslint-disable-next-line no-undef
windowWidth = Dimensions.get('window').width;
// eslint-disable-next-line no-undef
windowHeight = Dimensions.get('window').height;
// eslint-disable-next-line no-undef
const Home = ({route, navigation}) => {
  const {params} = route;
  const email = params && params.email ? params.email : '';
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={{flexDirection: 'row', marginTop: '8%', marginLeft: '4%', alignItems: 'center'}}>
          <Image source={require('../images/left.png')} />
          <Text>Login page </Text>
        </View>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>HOME PAGE</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 700}}>Chào :{email ? email : 'Khách'} </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
        <Text style={{fontWeight: 700, fontSize: 30}}>1</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
        <TouchableOpacity>
          <Text style={{fontWeight: 700, fontSize: 15, borderWidth: 1, padding: 20, borderRadius: 20}}>Đếm số</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
