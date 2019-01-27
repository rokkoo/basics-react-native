import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Contador extends React.Component {
    // https://codeburst.io/props-and-state-in-react-native-explained-in-simple-english-8ea73b1d224e
    /**
     * Hay dso tipos de control de datos 
     * Props -> Se los pasa el padre, son datos que deberian ser inmutables
     * State -> Datos que pueden cambiar
     *  Generalmente el stado debe inicializarce en el constructor
     *  Para cambiar un stado tenemos que usar setState
     *  setState se encarga de hacer el re-rendeer del componente para mostrar lo último
     */
     constructor(props) {
         super(props)
         this.state =  {
             contador: 0
         }

         // hay que enlazar el this de la funcion con el de la clase
         this._sumarF = this._sumarF.bind(this)
     }

     /**
      * Con las arrowfunctions el this de la funcion es el de la clase
      * Con las funciones comunes el this es el de la funcion
      * https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a
      */
     _sumarF(){
         // podemos cogerlo directamente del state sin usar el callback, pero es recomendado cogerlo del callback
        this.setState({ contador: this.state.contador + 1 });
     }

     _sumar = () => {
         // setState nos da un callback con los valores previos del stado
        this.setState(prevState => ({ contador: prevState.contador + 1 }));
     }

     _restar = () => {
         // podemos destructurar el objeto si quremos
        this.setState(({ contador }) => ({ contador: contador - 1 }));
     }

     render() {
        const {contador} = this.state
        return (
            // Aplicando stilos en linea
            <View style={{flex:1,flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}  >
                <Button 
                    title= '-'
                    color="#841584"
                    onPress={ this._restar }
                />
                <Text style={styles.contador}>{ contador }</Text>
                <Button 
                    title= '+'
                    onPress= { this._sumar }
                />
            </View>
        )
        }
}
// Estilos
const styles = StyleSheet.create({
    contador: {
        width:50,
        textAlign: 'center',
    }
})