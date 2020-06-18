
import 'react-native-gesture-handler';


import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Homepage';
import Screen1 from './pages/Screen1';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*You can put Button Image here*/}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function homeScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home', //Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#7b68ee', //Header color
            },
            headerTintColor: '#fff', //Header text color
            headerTitleStyle: {
              fontWeight: 'normal', //Header text style
            },
          }}
        />

        <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{
          title: 'New Screen!!!', //Header Title
          
        }}/>

      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#7b68ee',
          itemStyle: { marginVertical: 50 },
        }}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Homepage' }}
          component={homeScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;