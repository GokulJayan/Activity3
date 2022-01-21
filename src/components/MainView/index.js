import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainView() {

  const [count, setCount] = useState(0)

  function Increment() {
    if (count < 100)
      setCount(count + 1)
  }

  function Decrement() {
    if (count > 0)
      setCount(count - 1)
  }

  return (
    <View style={styles.container}>

      <View style={styles.main}>
        <Text style={styles.text}>{count}</Text>
      </View>

      <View style={styles.buttons}>
          <View>
              <Icon style={styles.icon} name="repeat" size={52} color="#cccccc" />
          </View>
          
        
        <View>
          <TouchableOpacity
            style={styles.button1}
            activeOpacity={.5}
            onPress={Decrement}
          >
          <Text style={styles.buttonText1}>-</Text>
          </TouchableOpacity>
        </View>

        <View>
           <TouchableOpacity
            style={styles.button2}
            activeOpacity={.5}
            onPress={Increment}
          >
          <Text style={styles.buttonText2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{color:'#747474', paddingTop:60, paddingRight:190, fontSize:15}}>COUNT BY:  1</Text>

      <View style={styles.card1}>
      <Icon style={{paddingTop:25,paddingLeft:30}} name="repeat" size={38} color="#969696" />
      <Icon style={{paddingTop:25,paddingLeft:30}} name="minus-circle" size={38} color="#969696" />
      <Icon style={{paddingTop:25,paddingLeft:30}} name="plus-circle" size={38} color="#969696" />
      <Text style={{paddingTop:18,paddingLeft:90, fontSize:38, color:'#969696'}}>10</Text>
      </View>

      <View style={styles.card2}>
      <Icon style={{paddingTop:25,paddingLeft:30}} name="repeat" size={38} color="#969696" />
      <Icon style={{paddingTop:25,paddingLeft:30}} name="pause-circle" size={40} color="#fb8472" />
      <Text style={{paddingTop:19,paddingLeft:50, fontSize:38, color:'#969696'}}>00:01:50</Text>
      </View>

      <View style={styles.card3}>
        <Text style={{color:'#cacaca', paddingTop:26, paddingLeft:25, fontSize:15}}>Notes:</Text>
        <Text style={{color:'#cacaca', paddingTop:26, paddingLeft:225, fontSize:15}}>0/1000</Text>
        <TextInput style={{color:'white',position:'absolute',marginTop:50,marginLeft:30}} placeholder='Enter a message...'></TextInput>
      </View>

    </View>
  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#202020',
    alignItems: 'center'
  },

  main: {
    marginTop:0,
    width:400,
    height:220,
    paddingTop: 10,
    paddingLeft:70,
    backgroundColor:'#fb6b74',
  },

  text: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft:100,
  },

  buttons: {
    backgroundColor:'#3c3c3c',
    flexDirection: 'row',
    width:375,
    height:190,
    position: 'absolute',
    marginTop:150,
    alignSelf:'flex-start',
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },

  button1: {
 
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#3c3c3c',
    borderWidth:5,
    borderColor:'#cccccc',
    marginTop:30,
    marginLeft:32,
  },

  button2: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#3c3c3c',
    borderWidth:12,
    borderColor:'#fe7f75',
    marginTop:25,
    marginLeft:29,
  },
 
  buttonText1:{
      color:'#cccccc',
      textAlign:'center',
      fontSize:80,
      position:'absolute',
      paddingBottom:13,
  },

  buttonText2:{
    color:'#fe7f75',
    textAlign:'center',
    fontSize:140,
    position:'absolute',
    paddingBottom:16
},

icon:{
    paddingTop:28,
    paddingLeft:50,
},

card1: {
  backgroundColor:'#3c3c3c',
  flexDirection: 'row',
  width:375,
  height:90,
  position: 'absolute',
  marginTop:360,
  alignSelf:'flex-end',
  borderTopLeftRadius:10,
  borderBottomLeftRadius:10
},

card2: {
  backgroundColor:'#3c3c3c',
  flexDirection: 'row',
  width:375,
  height:90,
  position: 'absolute',
  marginTop:465,
  alignSelf:'flex-end',
  borderTopLeftRadius:10,
  borderBottomLeftRadius:10
},

card3: {
  backgroundColor:'#3c3c3c',
  flexDirection: 'row',
  width:375,
  height:125,
  position: 'absolute',
  marginTop:570,
  alignSelf:'flex-end',
  borderTopLeftRadius:10,
  borderBottomLeftRadius:10
},



});