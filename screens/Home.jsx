import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Selamat Datang Di Teman Ngobrol</Text>
        <TouchableOpacity style={styles.button}>
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
  welcome: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop:23,
      marginBottom:175,
  },
  button: {
    backgroundColor:"white",
    maxWidth:157,
    maxHeight:54,
    borderRadius:20,
  },
  tombol:{
    fontSize:30,
    fontWeight:'medium',
    marginVertical:9,
    marginHorizontal:33,


  }
})