import React, {Component, useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function BT8() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [valueNumber, setValueNumber] = useState(0);
  const [check, setCheck] = useState('');

  const regex = /^[0-9]+$/;

  const onChangeTextHandleA = (text) => {
    if (!regex.test(text)) {
      Alert.alert('Thông báo', 'Vui lòng nhập số');
    } else if (regex.test(text)) {
      setNumberA(text);
    }
  };

  const onChangeTextHandleB = (text) => {
    if (!regex.test(text)) {
      Alert.alert('Thông báo', 'Vui lòng nhập số');
    } else {
      setNumberB(text);
    }
  };

  const tinh = () => {
    if (isNaN(numberA) || isNaN(numberB)) {
      Alert.alert('Thông báo', 'Vui lòng nhập số');
    } else if (check === 'add') {
      const result = parseInt(numberA) + parseInt(numberB);
      setValueNumber(result);
    } else if (check === 'sub') {
      const result = parseInt(numberA) - parseInt(numberB);
      setValueNumber(result);
    } else if (check === 'mul') {
      const result = parseInt(numberA) * parseInt(numberB);
      setValueNumber(result);
    } else if (check === 'div') {
      if (parseInt(numberB) === 0) {
        Alert.alert('Thông báo', 'Vui lòng nhập số khác 0');
      } else {
        const result = parseInt(numberA) / parseInt(numberB);
        setValueNumber(result);
      }
    } else if (check === 'uc') {
      let a = parseInt(numberA);
      let b = parseInt(numberB);
      while (a !== b) {
        if (a > b) {
          a -= b;
        } else {
          b -= a;
        }
      }
      const result = a;
      setValueNumber(result);
    }
    if (check === 'ac') {
      setNumberA(0);
      setNumberB(0);
      setValueNumber(0);
    }
  };

  useEffect(() => {
    if (check === 'add' || check === 'sub' || check === 'mul' || check === 'div' || check === 'uc') {
      tinh();
    }
  }, [check]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{backgroundColor: 'green', height: 40, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 700}}>Các kiểu lập trình hướng sự kiện</Text>
      </View>
      {/* Số a */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            marginTop: 20,
            height: 50,
            width: '40%',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, paddingLeft: 20}}>Số a</Text>
        </View>
        <View style={{borderBottomWidth: 1, width: '60%', height: 50, marginTop: 20}}>
          <TextInput onChangeText={onChangeTextHandleA} />
        </View>
      </View>

      {/* SỐ b */}

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            marginTop: 20,
            height: 50,
            width: '40%',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, paddingLeft: 20}}>Số b</Text>
        </View>
        <View style={{borderBottomWidth: 1, width: '60%', height: 50, marginTop: 20}}>
          <TextInput onChangeText={onChangeTextHandleB} />
        </View>
      </View>

      {/* Kết quả */}

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            marginTop: 20,
            height: 40,
            width: '96%',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text style={{paddingLeft: 10, fontWeight: 600}}>Kết quả là: {valueNumber}</Text>
        </View>
      </View>

      {/* Cộng 2 Số */}

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{width: '96%'}}
          onPress={() => {
            if (check === '' || check === 'sub' || check === 'mul' || check === 'div' || check === 'uc') {
              setCheck('add');
            }
          }}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#66FF99',
            }}>
            <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 20, color: 'blue'}}>Cộng 2 số</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Trừ 2 số */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{width: '96%'}}
          onPress={() => {
            if (check === '' || check === 'add' || check === 'mul' || check === 'div' || check === 'uc') {
              setCheck('sub');
            }
          }}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              width: '100%',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#66FF99',
            }}>
            <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 20, color: 'blue'}}>Trừ 2 số</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Nhân 2 số */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{width: '96%'}}
          onPress={() => {
            if (check === '' || check === 'add' || check === 'sub' || check === 'div' || check === 'uc') {
              setCheck('mul');
            }
          }}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              width: '100%',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#66FF99',
            }}>
            <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 20, color: 'blue'}}>Nhân 2 số</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Chia 2 số */}

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{width: '96%'}}
          onPress={() => {
            if (check === '' || check === 'add' || check === 'sub' || check === 'mul' || check === 'uc') {
              setCheck('div');
            }
          }}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              width: '100%',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#66FF99',
            }}>
            <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 20, color: 'blue'}}>Chia 2 số</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Ước chung lớn nhất */}

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{width: '96%'}}
          onPress={() => {
            if (check === '' || check === 'add' || check === 'sub' || check === 'mul' || check === 'div') {
              setCheck('uc');
            }
          }}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              width: '100%',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#66FF99',
            }}>
            <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 20, color: 'blue'}}>Ước chung 2 số</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Reset AC */}

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{width: '96%'}}
          onPress={() => {
            if (check === 'add' || check === 'sub' || check === 'mul' || check === 'div' || check === 'uc') {
              setCheck('ac');
            }
          }}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              width: '100%',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#66FF99',
            }}>
            <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 20, color: 'red'}}>AC</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
