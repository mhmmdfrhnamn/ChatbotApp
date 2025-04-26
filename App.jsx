import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'

const App = () => {
  return (
    <View style={styles.wrapper}> 
      <Home/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  }
})