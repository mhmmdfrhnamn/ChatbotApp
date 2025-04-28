import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Bubble = ({message, user}) => {
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
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    pengguna: {
        alignSelf: 'flex-end',
        backgroundColor: '#f0e68c',
    },
    bot :{
        alignSelf: 'flex-start',
        backgroundColor:'#ececec'
    },
    text:{
        fontSize: 16,
        color: '#000000'
    }
})

export default Bubble