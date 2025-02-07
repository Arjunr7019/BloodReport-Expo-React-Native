import AsyncStorage from "@react-native-async-storage/async-storage";

const setUserAuth = async(value:any)=>{
    await AsyncStorage.setItem('userData', JSON.stringify(value));
}

const getUserAuth = async()=>{
    const value:any = await AsyncStorage.getItem('userData');
    return JSON.parse(value);
}

const Logout = ()=>{
    AsyncStorage.clear();
}

export default{
    setUserAuth,
    getUserAuth,
    Logout
}