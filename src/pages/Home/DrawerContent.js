import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Button, Text } from 'native-base';
import Ionicon from "react-native-vector-icons/Ionicons";
import Antdesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BgImage from '../Home/images/Homee.jpg';
import Perfomance from '../Home/images/Perfomance.jpg';
import App from '../Home/images/App.jpg';
import Log from '../Home/images/Log.jpg';
import Map from '../Home/images/Map.jpg';
import Status from '../Home/images/Status.jpg';
import History from '../Home/images/History.jpg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
      <View style={styles.containerStyle}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name={'bars'} size={25} color={'#69AFED'} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleStyle}>
          <Text style= {{fontSize: 35, width: 160, marginLeft: 25, color: 'white', fontWeight: 'bold'}}>Signal Viewer</Text>
        </View>
        <View style={styles.menustyle}>
          <TouchableOpacity style={styles.titlestyle}>
            <Image source={Perfomance} />
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 10}} >Performance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.titlestyle} onPress={() => navigation.navigate('Application')}>
            <Image source={App} />
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 10}} >Application</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.title}>
            <Image source={Log} />
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 10}} >PCap Log</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.title}>
            <Image source={Map} />
            <TouchableOpacity>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 10}} >MAP</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.title}>
            <Image source={Status} />
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 10}} >Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.title}>
            <Image source={History} />
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 10}} >History</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'gray'
  },
  bgImageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  icon: {
    height: 55,
    justifyContent: 'center',
    paddingLeft: 15
  },
  titleStyle: {
    height: 90,
    justifyContent: 'center'
  },
  menustyle: {
    height:180,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40
  },
  titlestyle: {
    width: 130,
    height: 130, 
    borderWidth: 3,
    borderColor: '#69AFED',
    borderRadius: 20,
    color: 'white',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  menu: {
    height:180,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    width: 130,
    height: 130, 
    borderWidth: 3,
    borderColor: '#69AFED',
    borderRadius: 20,
    color: 'white',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center'
  }

})

const Drawer = createDrawerNavigator();

export default function Content() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}