import { View, TextInput, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
    return (
        <View style={style.container}>
            <Image style={{ marginBottom: 10 }} source={require("../Assets/bloodReport.png")} />
            <Text style={{ color: "white", fontSize: 40, fontWeight: "bold", marginBottom: 10 }}>Login</Text>
            <View style={{ width: "100%", alignItems: "center" }}>
                <TextInput style={style.inputForm} placeholder='Email' />
                <TextInput secureTextEntry style={style.inputForm} placeholder='Password' />
            </View>
            <TouchableOpacity>
                <Text style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10, backgroundColor: "#616161", color: "white", fontSize: 24 }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontFamily:"Ubuntu"
    },
    inputForm: {
        fontSize: 24,
        height: 50,
        color: "white",
        width: "80%",
        backgroundColor: "#616161",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15
    }
})