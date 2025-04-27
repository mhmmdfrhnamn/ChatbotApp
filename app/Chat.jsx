import { StyleSheet, Text, View } from 'react-native'
import { useCustomFonts } from '../src/fonts/fonts'
import Logo from '../assets/images/icon.svg'
import React from 'react'

const Chat = () => {

  const[fontsLoaded]=useCustomFonts()
  if(!fontsLoaded){
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={49}/>
        <Text style={styles.tittle}>Teman Ngobrol</Text>
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#ffff'
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F0E68C',
    borderRadius: 10,
  },
  tittle:{
    marginLeft: 10,
    fontSize:30,
    fontFamily: 'Fira-Bold',
  }
})