import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from '../avatar.png';


const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: "#7b68ee" }}>
      <View style={styles.Container}>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 5 }}
            onPress={() => navigation.navigate('Screen1')} >
            <Image
              style={{ width: 100, height: 100 }}
              source={Avatar}></Image>
          </TouchableOpacity>

        </View>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderRadius: 150 / 2,
    backgroundColor: '#fff', padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  }
});

export default Home;