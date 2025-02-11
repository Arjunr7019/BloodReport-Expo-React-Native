import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../Context/AuthContext';
import { BarChart } from "react-native-gifted-charts";

export default function Home() {
    const userAuthContext: any = useContext(AuthContext)
    const { userData } = userAuthContext;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("ESR");
    const [items, setItems] = useState([
        { label: 'ESR', value: 'ESR' },
        { label: 'CRP', value: 'CRP' },
        { label: 'BP', value: 'BP' },
        { label: 'Glc', value: 'Glc' }
    ]);

    const data = userData?.data?.user?.parameters?.[value]?.map((data: any) => ({
        value: Number(data.value) || 0,  // Ensure value is a valid number
        label: data.date
    })) || [];
    // console.log(userData?.data?.user?.parameters?.BP)
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", flexDirection: "column", height: "100%", width: "100%", paddingVertical: 40, paddingHorizontal: 20 }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                <View>
                    <Feather name="menu" size={30} color="white" />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "white", paddingRight: 6, fontSize: 16 }}>{userData?.data.user.name}</Text>
                    <View style={{ backgroundColor: "#616161", borderRadius: 50, padding: 6 }}>
                        <Feather name="user" size={30} color="white" />
                    </View>
                </View>
            </View>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold",marginBottom:10 }}>Dashboard</Text>
            <View style={{ flexDirection: "row" }}>
                <View style={style.dateTextCard}>
                    <Text style={[style.textColor, { paddingHorizontal: 4, fontSize: 16 }]}>{`Last Test: ${userData?.data.user.lastUpdateDate}`}</Text>
                </View>
                <View style={style.dateTextCard}>
                    <Text style={[style.textColor, { paddingHorizontal: 4, fontSize: 16 }]}>{`Joined: ${userData?.data.user.joinedDate}`}</Text>
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
                        style={[style.cardBackgroungColor, { borderWidth: 1, borderColor: "#808080" }]}
                        dropDownContainerStyle={[style.cardBackgroungColor, { borderWidth: 1, borderColor: "#808080" }]}
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
            <View style={[style.cardBackgroungColor, { paddingVertical: 40, marginTop: 10, borderRadius: 10, height: "58%" }]}>
                
                <BarChart
                    width={Dimensions.get("window").width - 110}
                    data={data}
                    barWidth={35}
                    cappedBars
                    capColor={'rgba(78, 0, 142)'}
                    capThickness={4}
                    showGradient
                    gradientColor={'white'}
                    frontColor={'rgba(162, 162, 162, 0.2)'}
                    yAxisTextStyle={{ color: "white", fontSize: 14 }} // Orange Y-axis labels
                    xAxisLabelTextStyle={{ color: "white", fontSize: 14 }} // Blue X-axis labels
                    isAnimated
                />
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