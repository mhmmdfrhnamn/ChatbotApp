import {  StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React, {useState,} from 'react'
import { useCustomFonts } from '../src/fonts/fonts'
import Logo from '../assets/images/icon.svg'
import Bubble from './components/bubble'
import { openRouter } from '../services/api'
import { router } from 'expo-router'


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
      id: Date.now().toString(),
      text: input,
      user: true
    }

    setPesan((prev)=>[...prev, pesanUser])
    setInput('')

    try{
      const botReply = await openRouter(input)

      const botMessage = {
        id: (Date.now()+1).toString(),
        text: botReply,
        user:false
      };
      setPesan((prev)=>[...prev,botMessage])
    } catch (error) {
      const errorMessage = {
        id: (Date.now()+2).toString(),
        text: 'Gagal Medapat Jawaban',
        user: false
      }
      setPesan((prev)=>[...prev,errorMessage])
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={{flexDirection:"row", alignItems:"center", marginLeft:70}}>
        <Logo width={49}/>
        <Text style={styles.tittle}>Teman Ngobrol</Text>
        </View>

        <TouchableOpacity style={styles.info}>
        <Feather name="info" size={28} color="#F0E68C" style={styles.about}
        onPress={()=>router.push('/about')}
        />
        </TouchableOpacity>
      </View>

      <FlatList
        data={pesan}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>(
          <Bubble message={item.text} user={item.user}/>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder='Tulis Pesan..'
          placeholderTextColor="#000000"
          style={styles.input}
        />
        <TouchableOpacity style={{
          backgroundColor:'#f0e68c',
          padding: 15,
          borderRadius:10
        }} onPress={handleSend}
        >  
          <Feather style={styles.send} name="send" size={15}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#ffff'
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#F0E68C',
    borderRadius: 10,
  },
  tittle:{
    marginLeft: 10,
    fontSize:40,
    fontFamily: 'Fira-Bold',
  },
  info:{
    marginTop:7,
    marginRight:30,
    backgroundColor:'black',
    borderRadius:50
  },
  inputContainer: {
    backgroundColor:'#ffff',
    marginVertical:30,
    marginHorizontal:30,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 7,
    borderWidth: 2,
    borderColor: '#F0E68C',
    alignItems:'center'
  }, 
  input:{
    flex:1,
    padding:8,
    marginRight:5,
    fontSize: 20,
    fontFamily: 'Fira-Light'
  }
})

export default Chat