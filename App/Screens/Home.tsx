import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
// import { useFonts } from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Home() {
    // const [loaded, error] = useFonts({
    //     'Ubuntu-Regular': require('../../assets/fonts/Ubuntu-Regular.ttf'),
    //   });

    //   if(!loaded){
    //     console.log(loaded)
    //   }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("ESR");
    const [items, setItems] = useState([
        { label: 'ESR', value: 'ESR' },
        { label: 'CRP', value: 'CRP' }
    ]);

    return (
        <View style={{ flex: 1, justifyContent: "flex-start", flexDirection: "column", height: "100%", width: "100%", paddingVertical: 40, paddingHorizontal: 20 }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                <View>
                    <Feather name="menu" size={30} color="white" />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "white", paddingRight: 6, fontSize: 16 }}>UserName</Text>
                    <View style={{ backgroundColor: "#616161", borderRadius: 50, padding: 6 }}>
                        <Feather name="user" size={30} color="white" />
                    </View>
                </View>
            </View>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>Dashboard</Text>
            <View style={{ flexDirection: "row" }}>
                <View style={style.dateTextCard}>
                    <Text style={[style.textColor, { fontSize: 16 }]}>Last Test: Feb 12,2024</Text>
                </View>
                <View style={style.dateTextCard}>
                    <Text style={[style.textColor, { fontSize: 16 }]}>Joined: Feb 12,2024</Text>
                </View>
            </View>
            <View style={[style.cardBackgroungColor, { paddingVertical: 40, marginTop: 10, borderRadius: 10 }]}>
                <Text style={[style.textColor, { fontSize: 24 }]}>Wellness Score</Text>
                <Text style={[style.textColor, { fontSize: 16 }]}>80%</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
                <Text style={[style.textColor, { textAlign: "left", fontSize: 24, fontWeight: "bold" }]}>Performance Track</Text>
                {/* <select>
                    <Option></Option>
                </select> */}
                <View style={style.dropdown}>
                    <DropDownPicker
                    style={[style.cardBackgroungColor,{borderColor:"#616161"}]}
                    dropDownContainerStyle={[style.cardBackgroungColor,{borderColor:"#616161"}]}
                    textStyle={style.textColor}
                    ArrowDownIconComponent={() => <Entypo name="chevron-small-down" size={24} color="white" />}
                    ArrowUpIconComponent={() => <Entypo name="chevron-small-up" size={24} color="white" />}
                    TickIconComponent={() => <MaterialCommunityIcons name="check" size={24} color="white" />}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="ESR"
                    />
                </View>
            </View>
            <View style={[style.cardBackgroungColor, { paddingVertical: 40, marginTop: 10, borderRadius: 10, height:"60%" }]}>
                <Text style={{color:"white"}}>graph section</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    textColor: {
        color: "white",
        textAlign: "center"
    },
    cardBackgroungColor: {
        backgroundColor: "#616161"
    },
    dateTextCard: {
        backgroundColor: "#616161",
        borderRadius: 10,
        paddingVertical: 6,
        width: "50%",
        marginEnd: 5
    },
    dropdown: {
        justifyContent: 'center',
        paddingHorizontal: 16,
        width: "40%"
    }
})