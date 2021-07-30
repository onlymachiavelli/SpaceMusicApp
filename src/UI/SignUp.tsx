import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { RegularUser, Email, MPhone, SUser } from './svg'
import { signin, common } from './Style'
import { Sett } from './Common'
import Setting from './Settings'
import Language from './languages'
import Login from './Login'
let Lan = Language.English
const SignUp = ({ navigation }) => {
    return (
        <View style={signin.root}>
            <ScrollView style={common.Full}>
                <TouchableOpacity onPress={() => { navigation.navigate(Setting) }} >
                    <Sett />
                </TouchableOpacity>
                <View style={{ marginTop: 30, }}>
                    <Text style={common.Label}>
                        {Lan.signup}
                    </Text>
                </View>

                <View style={signin.BlocInp}>
                    <View style={common.InputContaine}>
                        <Text style={common.inpl}>
                            <RegularUser />
                        </Text>
                        <TextInput
                            placeholder={Lan.fname}
                            placeholderTextColor="#fff"

                            style={common.Input}
                        >
                        </TextInput>
                    </View>


                    <View style={common.InputContaine}>
                        <Text style={common.inpl}>
                            <Email />
                        </Text>
                        <TextInput
                            placeholder={Lan.email}
                            placeholderTextColor="#fff"

                            style={common.Input}
                        >
                        </TextInput>
                    </View>


                    <View style={common.InputContaine}>
                        <Text style={common.inpl}>
                            <MPhone />
                        </Text>
                        <TextInput
                            placeholder={Lan.pnumber}
                            placeholderTextColor="#fff"

                            style={common.Input}
                        >
                        </TextInput>
                    </View>


                    <View style={common.InputContaine}>
                        <Text style={common.inpl}>
                            <SUser />
                        </Text>
                        <TextInput
                            placeholder={Lan.username}
                            placeholderTextColor="#fff"

                            style={common.Input}
                        >
                        </TextInput>
                    </View>
                    <TouchableOpacity style={common.Subbtn}>
                        <Text style={common.Stext}>{Lan.continue}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: "center",
                            marginTop: 20,
                        }}
                        onPress={() => { navigation.navigate(Login) }}>
                        <Text style={{
                            color: "#Fff",
                        }}>
                            {Lan.haveacc}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}
export default SignUp