import React, {Component, useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Item, Input, Form, Label, Button, Text } from 'native-base';
import { CheckBox } from 'react-native-elements';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BgImage from '../images/Login.jpg';
import SigninForm from '../pages/Signin';

function SignupForm(props) {
  	const { navigation } = props

  	const[checked, setCheck] = useState(false);
		return (
			<View style={styles.containerStyle}>
				<Image style={styles.bgImageStyle} source={BgImage} />
				<View style={styles.icon}>
					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<FontAwesome5 name={'arrow-left'} size={25} color={'#69AFED'} />
					</TouchableOpacity>
				</View>
				<View style={styles.titleStyle}>
					<Text style= {{fontSize: 45, width: 160, marginLeft: 35, color: 'white', fontWeight: 'bold'}}>Signal Viewer</Text>
				</View>
				<Form style= {styles.formStyle}>
					<Item style={styles.itemStyle}>
						<Input style={styles.inputStyle} placeholder={'Username'} placeholderTextColor={'white'} underLineColorAndroid={'transparent'} />
					</Item>
					<Item style={styles.itemStyle}>
						<Input style={styles.inputStyle} placeholder={'E-mail'} placeholderTextColor={'white'} underLineColorAndroid={'transparent'} />
					</Item>
					<Item style={styles.itemStyle}>
						<Input style={styles.inputStyle} secureTextEntry={true} placeholder={'Password'} placeholderTextColor={'white'} underLineColorAndroid={'transparent'} />
					</Item>
					<Item style={styles.itemStyle}>
						<Input style={styles.inputStyle} secureTextEntry={true} placeholder={'Confirm Password'} placeholderTextColor={'white'} underLineColorAndroid={'transparent'} />
					</Item>
					<View style={{flexDirection: 'row'}}>
						<CheckBox checkedColor= '#69AFED' onPress={()=>setCheck(checked)} style={styles.check} />
						<Text style={{fontSize: 13, color: 'white', marginTop: 17, marginLeft: -35}}>By signing up, I agree to</Text>
						<Text style= {{fontSize: 13, color: '#69AFED', marginTop: 17}}> Terms</Text>
						<Text style= {{fontSize: 13, marginTop: 17, color: 'white'}}> & </Text>
						<Text style= {{fontSize: 13, color: '#69AFED', marginTop: 17}}>Condition</Text>
					</View>
				</Form>
				
				<TouchableOpacity style= {styles.buttonStyle}>
					<Text style= {{fontSize: 25, textAlign: 'center', color: '#12062C', fontWeight: 'bold'}} >Sign Up</Text>
				</TouchableOpacity>
				<View style= {styles.signinStyle}>
					<TouchableOpacity style= {{flexDirection: 'row'}} onPress={() => navigation.navigate('Login')}>
						<Text style= {{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Have an account?</Text>
						<Text style= {{fontSize: 14, color: '#69AFED', fontWeight: 'bold'}}>  Sign In</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
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
	iconStyle: {
		marginLeft: 15
	},
	titleStyle: {
		height: 200,
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
		fontWeight: 'bold'
	},
	check: {
		width: 40,
		backgroundColor: 'white'
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
	signinStyle: {
		height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 90

	}
})

export default SignupForm;