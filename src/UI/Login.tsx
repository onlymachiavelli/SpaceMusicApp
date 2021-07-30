import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { LogingStyle, common } from './Style'
import { Sett } from './Common'
import Setting from './Settings'
const Login = ({ navigation }) => {
    return (
        <View style={LogingStyle.root}>
            <ScrollView style={common.Full}>
                <TouchableOpacity onPress={() => { navigation.navigate(Setting) }} >
                    <Sett />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Login