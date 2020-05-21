import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	    <View style={{flex: 1}}>
			<Header>
				<Left>
				    <TouchableOpacity onPress={() => navigation.openDrawer()}>
				      <FontAwesome5 name={'arrow-left'} size={25} color={'#69AFED'} style={{marginLeft: 10}} />
				    </TouchableOpacity>
				</Left>
				<Body>
				    <Title style={{paddingLeft: 15}}>Application Test</Title>
				</Body>
			</Header>
		</View>
      	<Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Content() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}