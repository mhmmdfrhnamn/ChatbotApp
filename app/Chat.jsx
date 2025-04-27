import { PermissionsAndroid, StyleSheet, Text, TextInput, View,  } from 'react-native'
import React, {useState,} from 'react'
import { useCustomFonts } from '../src/fonts/fonts'
import Logo from '../assets/images/icon.svg'


const Chat = () => {

  const[fontsLoaded]=useCustomFonts()
  if(!fontsLoaded){
    return null
  }

  const [pesan, setPesan ] = useState([])
  const [input, setInput] = useState('')

  const handleSend = async ()=> {
    if (!input.trim()) return

    const pesanUser = {
      id: Date.now().toString,
      text: input,
      user: true
    }

    setPesan((prev)=>[...prev, pesanUser])
    setInput('')
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Logo width={49}/>
        <Text style={styles.tittle}>Teman Ngobrol</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder='Tulis Pesan'
          placeholderTextColor="#000000"
          style={styles.input}
        />
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
  },
  inputContainer: {
    backgroundColor:'#ffffff',
    marginBottom:41,
    marginLeft:41,
    marginRight:41,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 7,
    borderWidth: 2,
    borderColor: '#F0E68C',
    alignItems:'center'
  }, 
  input:{
    padding:8,
    marginRight:5,
  }
})