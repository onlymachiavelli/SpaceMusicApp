import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { LogingStyle, common } from './Style'
import { Sett } from './Common'
import Setting from './Settings'
import { MainLogo, RegularUser } from './svg'
import Language from '../../packs/languages'
const Lan = Language.English
const Login = ({ navigation }) => {
    return (
        <View style={LogingStyle.root}>
            <ScrollView style={common.Full}>
                <TouchableOpacity onPress={() => { navigation.navigate(Setting) }} >
                    <Sett />
                </TouchableOpacity>

                <View style={LogingStyle.logo}>
                    <MainLogo />
                </View>

                <Text style={common.Label}>
                    {Lan.signin}
                </Text>

                <View style={LogingStyle.BlocInp}>
                    <View style={common.InputContaine}>
                        <Text style={common.inpl}>
                            <RegularUser />
                        </Text>
                        <TextInput
                            placeholder={Lan.username}
                            placeholderTextColor="#fff"
                            style={common.Input}
                        >

                        </TextInput>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login