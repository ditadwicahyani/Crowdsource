import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Item, Input, Form, Label, Button, Thumbnail, Text } from 'native-base';
import Ionicon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BgImage from '../images/Login.jpg';
import SignupForm from '../pages/Signup';
import HomePage from '../pages/Home/HomePage';
import Content from '../pages/Home/DrawerContent';

function SigninForm({ navigation }) {
  return (
			<View style={styles.containerStyle}>
				<Image style={styles.bgImageStyle} source={BgImage} />
				<View style={styles.icon}>
					<TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
						<FontAwesome5 name={'arrow-left'} size={25} color={'#69AFED'} />
					</TouchableOpacity>
				</View>
				<View style={styles.titleStyle}>
					<Text style= {{fontSize: 45, width: 160, marginLeft: 35, color: 'white', fontWeight: 'bold'}}>Signal Viewer</Text>
				</View>
				<Form style= {styles.formStyle}>
					<Item style={styles.itemStyle}>
						<Ionicon name={'md-person'} size={25} color={'#69AFED'} style={styles.iconStyle} />
						<Input style={styles.inputStyle} placeholder={'Username'} placeholderTextColor={'white'} underLineColorAndroid={'transparent'} />
					</Item>
					<Item style={styles.itemStyle}>
						<Ionicon name={'md-lock'} size={25} color={'#69AFED'} style={styles.iconStyle} />
						<Input style={styles.inputStyle} secureTextEntry={true} placeholder={'Password'} placeholderTextColor={'white'} underLineColorAndroid={'transparent'} />
						<TouchableOpacity>
							<Ionicon name={'md-eye-off'} size={25} color={'#69AFED'} />
						</TouchableOpacity>
					</Item>
					<Text style={{fontSize: 12, textAlign: 'right', color: 'white', marginTop: 15}}>Forgot your password?</Text>
				</Form>
				<TouchableOpacity style= {styles.buttonStyle}>
					<Text style= {{fontSize: 25, textAlign: 'center', color: '#12062C', fontWeight: 'bold'}} >Sign In</Text>
				</TouchableOpacity>
				<View style= {styles.signupStyle}>
					<TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => navigation.navigate('Register')}>
						<Text style= {{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Don't have an account?</Text>
						<Text style= {{fontSize: 14, color: '#69AFED', fontWeight: 'bold'}}>  Sign Up</Text>
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
		height: 220,
		justifyContent: 'center'
	},

	formStyle: {
		marginTop: 10,
		paddingLeft: 20,
		paddingRight: 35
	},
	itemStyle: {
		marginTop: 5
	},

	inputStyle: {
		color: 'white',
		fontSize: 17,
		fontWeight: 'bold',
		marginLeft: 5,
		paddingLeft: 20
	},
	iconStyle: {
		marginLeft: 15
	},

	buttonStyle: {
		width: 320,
		height: 50,
		borderRadius: 10,
		backgroundColor: '#69AFED',
		justifyContent: 'center',
		marginTop: 15,
		marginHorizontal: 36 //jarak kanan kiri sama
	},

	signupStyle: {
		height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 190

	}
})

export default SigninForm;