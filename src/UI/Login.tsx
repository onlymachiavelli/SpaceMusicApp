import React, {useState} from'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { LogingStyle, common } from './Style'
import { Sett, BottomFixedBtn } from './Common'
import Setting from './Settings'
import { MainLogo, RegularUser, Lock, Visible, Hidden } from './svg'
import Language from '../../packs/languages'
import SignUp from './SignUp'
const Lan = Language.English
const Login = ({ navigation }) => {
    const [showPass, setShowPass] = useState(true)
    const [passIcon, setPassIcon] = useState(<Visible/>)
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

                    <View style={common.InputContaine}>
                        <Text style={common.inpl}>
                            <Lock />
                        </Text>
                        <TextInput
                            placeholder={Lan.password}
                            placeholderTextColor="#fff"
                            secureTextEntry={showPass}
                            style={common.Input}
                        >
                        </TextInput>
                        <View>
                            {passIcon}
                        </View>
                    </View>
                    <TouchableOpacity style={common.Subbtn}>
                        <Text style={common.Stext}>{Lan.login}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        alignSelf: "center",
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                    onPress={() => { }}>
                    <Text style={{
                        color: "#Fff",
                    }}>
                        {Lan.forgot}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <BottomFixedBtn>
                <TouchableOpacity style={{
                    width: "100%", height: "100%", alignItems
                        : "center", justifyContent: "center"
                }} onPress={() => { navigation.navigate(SignUp) }}>
                    <Text style={{ color: "#fff", fontSize: 19, }}>
                        {Lan.signup}
                    </Text>
                </TouchableOpacity>
            </BottomFixedBtn>
        </View>
    )
}

export default Login