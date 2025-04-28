import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useCustomFonts } from "../../src/fonts/fonts";

const Bubble = ({message, user}) => {

    const[fontsLoaded]=useCustomFonts()
    if (!fontsLoaded){
        return null
    }

    return (
        <View
            style={[
                styles.bubble,
                user ? styles.pengguna : styles.bot
            ]}
        >
            <Text style={styles.text}>{message}</Text>

        </View>
    )
}

const styles =StyleSheet.create({
    bubble: {
        padding: 15,
        marginVertical: 5,
        maxWidth: '80%',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    pengguna: {
        marginTop:25,
        alignSelf: 'flex-end',
        backgroundColor: '#f0e68c',
        borderTopEndRadius:0,
    },
    bot :{
        marginTop:25,
        borderBottomStartRadius:0,
        alignSelf: 'flex-start',
        backgroundColor:'#deccca'
    },
    text:{
        fontSize: 19,
        color: '#000000',
        fontFamily:'Fira-Regular'
    }
})

export default Bubble