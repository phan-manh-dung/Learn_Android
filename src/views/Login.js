import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Dimensions, TextInput, Image} from 'react-native';
windowWidth = Dimensions.get('window').width;
windowHeight = Dimensions.get('window').height;
const Login = ({navigation}) => {
  const [getPassWord, setPassword] = useState(true);
  const [getEmail, setEmail] = useState('');
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('../images/anhlogin.jpg')}
      resizeMode="stretch"
    >
      <View>
        {/* Email & pass */}
        <View
          style={{
            width: '100%',
            height: '40%',
            // marginTop: 10,
            marginTop: 0.3 * windowHeight,
            alignItems: 'center',
          }}
        >
          {/* Email */}
          <View
            style={{
              width: '70%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{color: 'white'}}>Email</Text>
            <TextInput
              value={getEmail}
              onChangeText={setEmail}
              style={{
                color: 'white',
                height: '100%',
                width: '70%',
                borderBottomWidth: 1,
                borderBottomColor: 'white',
              }}
            />
          </View>
          {/* password */}
          <View
            style={{
              marginTop: 20,
              width: '70%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{color: 'white'}}>Password</Text>
            <TextInput
              style={{
                color: 'white',
                height: '100%',
                width: '70%',
                borderBottomWidth: 1,
                borderBottomColor: 'white',
              }}
              secureTextEntry={getPassWord}
            />
            <TouchableOpacity
              style={{
                height: '100%',
                aspectRatio: 1,
                position: 'absolute',
                right: 5,
                width: 40,
                resizeMode: 'contain',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                if (getPassWord) {
                  setPassword(false);
                } else {
                  setPassword(true);
                }
              }}
            >
              {getPassWord ? (
                <View style={{flex: 1, aspectRatio: 1}}>
                  <Image
                    source={require('../images/dasheye.png')}
                    style={{flex: 1, width: '100%', transform: [{scale: 0.6}]}}
                  />
                </View>
              ) : (
                <View style={{flex: 1, aspectRatio: 1}}>
                  <Image source={require('../images/eye.png')} style={{flex: 1, transform: [{scale: 0.6}]}} />
                </View>
              )}
            </TouchableOpacity>
          </View>
          {/* button login and sigter */}
          <TouchableOpacity
            style={{width: '90%', height: '70%', alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Home', {
                email: getEmail,
              });
            }}
          >
            <View
              style={{
                marginTop: 75,
                borderRadius: 30,
                backgroundColor: 'green',
                width: '70%',
                height: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{fontSize: 18, fontWeight: 600, color: 'white'}}>Login</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderRadius: 30,
              backgroundColor: 'pink',
              width: '70%',
              height: '25%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{fontSize: 18, fontWeight: 600, color: 'white'}}>Resgiter</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
