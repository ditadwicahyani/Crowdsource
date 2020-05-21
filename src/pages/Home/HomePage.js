import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Button, Text, Right } from 'native-base';
import Ionicon from "react-native-vector-icons/Ionicons";
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
import { createStackNavigator } from '@react-navigation/stack';
import SigninForm from '../../pages/Signin';
import SignupForm from '../../pages/Signup';
import HomePage from '../../pages/Home/HomePage';
import Application from '../../pages/Application/Application';

function HomeScreen({ navigation }) {
  return (
      <View style={styles.containerStyle}>
				<Image style={styles.bgImageStyle} source={BgImage} />
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
    flex: 1
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

function MenuTab (props) {
	return(
		<SafeAreaView style={{flex: 1, backgroundColor: '#090314', justifyContent: 'center'}}>
			<ScrollView>
				<View style={{flex: 1,  backgroundColor: '#1C253F', height: 170, justifyContent: 'center'}}>
					<View style={{flexDirection: 'row'}}>
						<Ionicon name={'md-person'} size={70} color={'#69AFED'} style={{marginTop: 40, marginLeft: 40, }} />
						<TouchableOpacity style={{marginTop: 60, marginLeft: 15}} onPress={() => props.navigation.navigate('Login')} >
							<Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Sign In</Text>
							<Text style={{color: '#21B985', fontSize: 14, fontWeight: 'bold'}}>Free</Text>
						</TouchableOpacity>
					</View>
					<View style={{ width: 150, height: 30,  alignItems: 'center', justifyContent: 'center', marginTop: 20, marginLeft: 135}}>
						<TouchableOpacity>
							<Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Why Register?</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{flex: 1, height: 230, justifyContent: 'center'}}>
					<View style={{justifyContent: 'center', height: 70}}>
						<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
							<Feather name={'info'} size={35} color={'#69AFED'} style={{marginLeft: 60}}></Feather>
							<Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginLeft: 40}}>About</Text>
						</TouchableOpacity>
					</View>
					<View style={{justifyContent: 'center', height: 70}}>
						<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
							<Feather name={'settings'} size={35} color={'#69AFED'} style={{marginLeft: 60}}></Feather>
							<Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginLeft: 40}}>Setting</Text>
						</TouchableOpacity>
					</View>
				</View>
				
			</ScrollView>
		</SafeAreaView>
		)
}

const Stack = createStackNavigator();

function Router() {
  return (
      <Stack.Navigator>
      	<Stack.Screen name="Dashboard" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={SigninForm} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={SignupForm} options={{headerShown: false}} />
        <Stack.Screen name="Application" component={Application} options={{headerShown: false}} />
      </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function Content() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => MenuTab(props)}>
        <Drawer.Screen name="Home" component={Router} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}