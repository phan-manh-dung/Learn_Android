import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Dimensions, TextInput, Image} from 'react-native';
windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;
const Setting = ({navigation}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: '8%', marginLeft: '4%', alignItems: 'center'}}>
        <Image source={require('../images/left.png')} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 600}}>SETTING PAGE</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            borderWidth: 1,
            height: 50,
            justifyContent: 'center',
            width: '40%',
            borderRadius: 30,
            marginTop: '5%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop(2);
            }}>
            <Text>Back thẳng về login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;
