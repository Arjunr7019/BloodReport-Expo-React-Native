import { View, TextInput, Image, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useState,useContext } from 'react'
import Services from '../Shared/Services';
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
    const [login, setLogin] = useState(true);
    const [loginData, setLoginData] =useState({name:"",gender:"",email:"",password:""});
    const userAuthContext:any = useContext(AuthContext);

    const {setUserData} = userAuthContext;

    const loginUser = async () => {
        const response = await fetch('https://bloodreport-server.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });
        if (response.status === 200) {
            let data = await response.json();
            await Services.setUserAuth(data)
            setUserData(data)
        } else {
            // The user is not authenticated.
        }
    }
   
    return (
        <View style={style.container}>
            <Image style={{ marginBottom: 10, width: "60%", resizeMode: "contain" }} source={require("../Assets/bloodReport.png")} />
            <Text style={{ color: "white", fontSize: 35, fontWeight: "bold", marginBottom: 10 }}>{login ? "Login" : "Sign Up"}</Text>
            <View style={{ width: "100%", alignItems: "center" }}>
                {login ? <></> : <TextInput value={loginData.name} onChangeText={(text)=> setLoginData(val=>{return{...val,name:text}})} style={style.inputForm} placeholder='Name' />}
                {login ? <></> : <TextInput value={loginData.gender} onChangeText={(text)=> setLoginData(val=>{return{...val,gender:text}})} style={style.inputForm} placeholder='Gender' />}
                <TextInput value={loginData.email} onChangeText={(text)=> setLoginData(val=>{return{...val,email:text}})} style={style.inputForm} placeholder='Email' />
                <TextInput value={loginData.password} onChangeText={(text)=> setLoginData(val=>{return{...val,password:text}})} secureTextEntry style={style.inputForm} placeholder='Password' />
            </View>
            <TouchableOpacity>
                <Text onPress={()=> loginUser()} style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10, backgroundColor: "#616161", color: "white", fontSize: 24 }}>{login ? "Login" : "Sign Up"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={() => login ? setLogin(false) : setLogin(true)} style={{ color: "white", marginTop: 10 }}>{login ? "Don't have an Account" : "Already have an Account"}</Text>
            </TouchableOpacity>
            {login ? <TouchableOpacity>
                <Text style={{ color: "white", marginTop: 10 }}>Forgot Password</Text>
            </TouchableOpacity> : <></>}
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontFamily: "Ubuntu"
    },
    inputForm: {
        fontSize: 18,
        height: 40,
        width: "80%",
        color: "black",
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15
    }
})