import React, {Component, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Dimensions, TextInput, Image} from 'react-native';
windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;

import {updateEmail} from '../redux/actions/updateAction';

import {useDispatch, useSelector} from 'react-redux';

const Home = ({route, navigation}) => {
  const {params} = route;
  const info = useSelector((state) => state.personalInfo);

  const [email, onChangeEmail] = useState('');
  const dispatch = useDispatch();

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
      {/* home page */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>HOME PAGE</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 700}}>Chào :{email ? email : 'Khách'} </Text>
      </View>
      {/* thông tin người dùng */}
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: '10%'}}>
        <View>
          <Text style={{fontWeight: '700', fontSize: 16}}>Personal Info</Text>
          <Text>Name: {info.name}</Text>
          <Text>Email: {info.email}</Text>
          <Text>Address: {info.address}</Text>
          <Text>Score:{info.score}</Text>
        </View>
      </View>
      {/* hành động dispatch */}
      <View>
        <TextInput onChangeText={onChangeEmail} value={email} style={{height: 40, margin: 12, borderWidth: 1}} />
      </View>
      {/* nút cập nhật */}
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: '1%'}}>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateEmail(email));
          }}
          style={{
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 40,
            borderWidth: 1,
            padding: 10,
          }}>
          <Text>Cập nhật</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
