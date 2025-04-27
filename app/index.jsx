import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useCustomFonts } from '../src/fonts/fonts'
import Logo from '../assets/images/icon.svg'
import { router } from 'expo-router' 
import React from 'react'

const Home = () => {
  const [fontsLoaded]= useCustomFonts();

  if (!fontsLoaded){
    return null
  }

  return (
    <View style={styles.container}>

      <Logo width={138} height={138} style={styles.icon}/>

      <Text style={styles.welcome}>  Selamat Datang{'\n'}Di Teman Ngobrol</Text>

      <TouchableOpacity style={styles.button} onPress={()=>router.push('/chat')}>
        <Text style={styles.tombol}>Masuk</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor:"#F0E68C"
  },

  icon:{
    marginTop:180,
  },

  welcome: {
      fontFamily: 'Fira-Bold',
      fontSize: 40,
      marginTop:35,
      marginBottom:175,
  },
  button: {
    backgroundColor:"white",
    maxWidth:157,
    maxHeight:54,
    borderRadius:20,
  },
  tombol:{
    fontFamily:'Fira-Medium',
    fontSize:30,
    marginVertical:9,
    marginHorizontal:33,


  }
})