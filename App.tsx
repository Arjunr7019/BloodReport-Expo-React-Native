import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './App/Context/AuthContext';
import { useState, useEffect } from 'react';
import Services from './App/Shared/Services';
import Login from './App/Screens/Login';
import Home from './App/Screens/Home';

export default function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    Services.getUserAuth().then(res => {
      res ? setUserData(res) : setUserData(undefined);
    })
  }, [])
  return (
    <AuthContext.Provider value={{userData, setUserData}}>
      <View style={styles.container}>
        {userData ? <Home /> : <Login/>}
        <StatusBar style="light" />
      </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B4B4B',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});
