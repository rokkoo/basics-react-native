/**
 * Documentacion React Navigation
 * https://reactnavigation.org/docs/en/hello-react-navigation.html
 */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { 
    createStackNavigator, 
    createAppContainer, 
    createBottomTabNavigator, 
    createMaterialTopTabNavigator, 
    createDrawerNavigator } 
    from 'react-navigation';

class HomeScreen extends React.Component {
    // Insertamos las diferentes opciones de la navegacion
    static navigationOptions = {
        title: 'Home Screen',
        };
    render() {
        return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
        );
    }
}

class SettingScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>
                <Button
                title="Ir a la ventana de perfil"
                onPress={() =>
                    // podemos pasar tanto varibales vinarias como objetos
                   navigate('Profile', { name: 'Alfonso', edad: 23, inf: { name: 'Alfonso', edad: 23 } })
                }
            />    
          </View>
        )
    }
}

// 
class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile Screen'
    }
    render() {
        const { navigation } = this.props
        // cogemos el valor que queramos de los parametros y un valor por defecto por si no lo encuentra
        const name = navigation.getParam('name', 'user name')
        const edad = navigation.getParam('edad', 'edad del usuario')
        const foto = navigation.getParam('fotoUrl', 'foto del usuario')

        const infObject = navigation.getParam('inf', 'no hay informacion')
        console.log(infObject)

        return(
            <View style={styles.container}>
                <Text>Nombre del usuario {name}</Text>
                <Text>Edad del usuario {edad}</Text>
                <Text>{foto}</Text>
                <Button
                    title="Volver a la ventana de configuración"
                    onPress={() => this.props.navigation.goBack() }
                    />   
                <Button
                    style={{ margin: 370, }}
                    title="Ir a perfil"
                    onPress={() => this.props.navigation.push('Profile')}
                />
                <Button
                    style={{ margin: 370, }}
                    title="volver al inicio"
                    onPress={() => this.props.navigation.popToTop()}
                />
                

          </View>
        )
    }
}

/**
 * StackNavigator — Screens are rendered and placed on top of the other as stack. //  Un pila
 * TabNavigator — Screens are switched between using tab bar. // Intercambio 
 * DrawerNavigator — Screens switched from a drawer which slides from left. // Deslizar de dch a izq
 */

const profileStack = createStackNavigator({
    Setting: { screen: SettingScreen, navigationOptions: {title: 'Setting Screen'} },
    Profile: { screen: ProfileScreen }
}, {initialRouteName: 'Setting'})

// const AppNavigator = createMaterialTopTabNavigator({
// const AppNavigator = createDrawerNavigator({
// const AppNavigator = createStackNavigator({
const AppNavigator = createBottomTabNavigator(
    {
    Home: { screen: HomeScreen },
    Setting: profileStack
    },{
        initialRouteName: "Home",
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator)