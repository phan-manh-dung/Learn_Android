import React, {Component, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Dimensions, TextInput, Image} from 'react-native';
// eslint-disable-next-line no-undef
windowWidth = Dimensions.get('window').width;
// eslint-disable-next-line no-undef
windowHeight = Dimensions.get('window').height;
// eslint-disable-next-line no-undef
const Home = ({route, navigation}) => {
  const {params} = route;
  const email = params && params.email ? params.email : '';

  const [number, setNumber] = useState(0);
  const [check, setCheck] = useState(false);
  const [checkPause, setCheckPause] = useState(false);
  const [checkReset, setCheckReset] = useState(false);

  useEffect(() => {
    if (check) {
      const interval = setInterval(() => {
        if (number < 100) {
          setNumber((prevNumber) => prevNumber + 1);
        }
      }, 1000); // Mỗi giây
      return () => clearInterval(interval);
    }
  }, [number, check, checkPause]);

  const resetNumber = useEffect(() => {
    if (checkReset == true) {
      setNumber(0);
    }
    setCheckReset(false);
  });

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
        <Text style={{fontWeight: 700, fontSize: 30}}>{number}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
        <TouchableOpacity
          onPress={() => {
            if (!check) {
              setCheck(true);
            }
          }}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 15,
              paddingLeft: 34,
              paddingRight: 34,
              borderRadius: 20,
              paddingTop: 15,
              paddingBottom: 15,
              backgroundColor: 'green',
            }}>
            Đếm số
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
        <TouchableOpacity
          onPress={() => {
            if (checkPause == false) {
              setCheckPause(true);
            }
          }}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 15,
              paddingLeft: 28,
              paddingRight: 28,
              borderRadius: 20,
              paddingTop: 15,
              paddingBottom: 15,
              backgroundColor: 'green',
            }}>
            Dừng đếm
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
        <TouchableOpacity
          onPress={() => {
            if (checkReset == false) {
              setCheckReset(true);
              resetNumber;
            }
          }}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 15,
              paddingLeft: 28,
              paddingRight: 28,
              borderRadius: 20,
              paddingTop: 15,
              paddingBottom: 15,
              backgroundColor: 'green',
            }}>
            Reset đếm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
