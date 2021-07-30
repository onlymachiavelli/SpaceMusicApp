import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { LogingStyle, common } from './Style'
import { Sett } from './Common'
const Login = () => {
    return (
        <View style={LogingStyle.root}>
            <ScrollView style={common.Full}>
                <TouchableOpacity >
                    <Sett />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Login