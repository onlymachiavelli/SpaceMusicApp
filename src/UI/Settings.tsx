import React, {useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import {Settings, common} from './Style'
import { Moon, Sun} from "./svg"
import Language from './languages'
let lan = Language.English
const Setting = ({ navigation }) => {
    return (
        <View style={Settings.Container}>
            <View style={{marginTop:25}}>
                <Text style={common.Label}>
                    {lan.settings}
                </Text>
            </View>
            <TouchableOpacity onPress={()=>{}} style={Settings.B_button}>
                <View style={{marginTop:-10,}}>
                    <Moon/>
                </View>
               <Text style={Settings.btnTXT}>
                   {lan.display + " : " + lan.dark }
               </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Setting