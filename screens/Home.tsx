import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Radio } from '../../assets/svgs';

const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Radio />
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Text>Go to Profile</Text></TouchableOpacity>
    </View>
  )
}

export default Home