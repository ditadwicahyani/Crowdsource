import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import Ionicon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import App from '../Application/images/Application.jpg';

function Application(props) {
  const { navigation } = props
		return (
			<View style={styles.containerStyle}>
			<Image style={styles.bgImageStyle} source={App} />
				<Header style={styles.header}>
		          <Left>
		            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
		              <FontAwesome5 name={'arrow-left'} size={25} color={'#69AFED'} style={{marginLeft: 10}} />
		            </TouchableOpacity>
		          </Left>
		          <Body>
		            <Title style={{paddingLeft: 15}}>Application Test</Title>
		          </Body>
		        </Header>
		        <View style={styles.Image}>
		        	
		        </View>
		        <View style={styles.title}>
		        	<Text style= {{fontSize: 18, textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Application Test is currently disable.</Text>
		        </View>
		        <TouchableOpacity style= {styles.buttonStyle}>
					<Text style= {{fontSize: 20, textAlign: 'center', color: 'white', fontWeight: 'bold'}} >Enable Application Test</Text>
				</TouchableOpacity>
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
	header: {
		backgroundColor: '#2C3967'
	},
	Image: {
		width: 130,
		height: 120,
		justifyContent: 'center',
		marginLeft: 125,
		alignItems: 'center',
		marginTop: 20,
		backgroundColor: 'gray'
	},
	title: {
		width: 200,
		height: 80,
		justifyContent: 'center',
		marginLeft: 90
	},
	buttonStyle: {
		width: 330,
		height: 55,
		borderRadius: 10,
		backgroundColor: '#2C3967',
		justifyContent: 'center',
		marginHorizontal: 30 //jarak kanan kiri sama
	}
})

export default Application;