import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {View, Text, TouchableOpacity,StyleSheet, TextInput} from 'react-native'
import { Settings , Lock, MainLogo, RegularUser, Email,SUser, MPhone} from './../../packs/svg'
import Language from './../../packs/languages'
let Len = Language.English
 const SignUp = ({navigation}) => {
    return (
        <View style={Signupstyle.root}> 
            <TouchableOpacity style={{marginLeft:20,marginTop:10,}}>
            <Settings/>
            <Text style={Signupstyle.setTXT}>
                {Len.settings}
            </Text>
            </TouchableOpacity>

            <Text style={
                    {color:"#fff",
                    fontSize:24,
                    fontWeight:"bold",
                    alignSelf:"flex-start",
                    marginLeft:30,
                    marginBottom:20,
                    marginTop:30,
                }
                    }>
                 {Len.signup}
            </Text>

            <View style={Signupstyle.center}>
                <View style={Signupstyle.valuable1}>
                <View style={Signupstyle.input}> 
                    <View style={Signupstyle.inplogo}>
                        <RegularUser/>
                        <TextInput 
                        style={Signupstyle.inputText}
                        placeholder={Len.fname}
                        placeholderTextColor= "#fff">
                        </TextInput>
                    </View>
                </View>


                <View style={Signupstyle.input}> 
                    <View style={Signupstyle.inplogo}>
                        <Email/>
                        <TextInput 
                        style={Signupstyle.inputText}
                        placeholder={Len.email}
                        placeholderTextColor= "#fff">
                        </TextInput>
                    </View>
                </View>


                <View style={Signupstyle.input}> 
                    <View style={Signupstyle.inplogo}>
                        <MPhone/>
                        <TextInput 
                        style={Signupstyle.inputText}
                        placeholder={Len.pnumber}
                        placeholderTextColor= "#fff"
                        keyboardType="numeric">
                        </TextInput>
                    </View>
                </View>



                <View style={Signupstyle.input}> 
                    <View style={Signupstyle.inplogo}>
                        <SUser/>
                        <TextInput 
                        style={Signupstyle.inputText}
                        placeholder={Len.username}
                        placeholderTextColor= "#fff">
                        </TextInput>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={Signupstyle.button}>
                        <Text style={Signupstyle.buttontext}>
                            {Len.continue}
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>


                    <View style={Signupstyle.valuable2}>
                            <View style={Signupstyle.input}> 
                                <View style={Signupstyle.inplogo}>
                                    <Lock/>
                                    <TextInput 
                                    style={Signupstyle.inputText}
                                    placeholder={Len.password}
                                    placeholderTextColor= "#fff">
                                    </TextInput>
                                </View>
                            </View>

                            <View style={Signupstyle.input}> 
                                <View style={Signupstyle.inplogo}>
                                    <Lock/>
                                    <TextInput 
                                    style={Signupstyle.inputText}
                                    placeholder={Len.pagain}
                                    placeholderTextColor= "#fff">
                                    </TextInput>
                                </View>
                            </View>

                        <TouchableOpacity onPress={
                            ()=>{
                            }
                        }>
                            <View style={Signupstyle.button}>
                                <Text style={Signupstyle.buttontext}>
                                    {Len.signup}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Login")
                }}>
                    <Text style={{
                        color:"#fff",
                        fontSize:17,
                        marginTop:30,
                    }}>
                        {Len.haveacc}
                    </Text>
                </TouchableOpacity>

                
            </View>
        </View>
    )
}
export default SignUp

let Signupstyle = StyleSheet.create({
    root:{
        width:"100%",
        height:"100%",
        backgroundColor:"#141923"
    },
    setTXT:{
        color:"#fff",
        marginLeft:20,
        marginTop:-16,
    },
    input:{
        width:"90%",
        height:57,
        backgroundColor:"#2F384B",
        borderRadius:30,
        marginTop:20,
        overflow:"hidden"
    },
    inplogo:{
        marginTop:16,
        marginLeft:20,
    },
    inputText:{
        color:"#fff",
        width:"80%",
        height:40,
        marginTop:-31,
        marginLeft:35,
    },
    button:{
        backgroundColor:"#C9872B",
        width:270,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        marginTop:40,

    },
    buttontext:{
        color:"#fff",
        fontSize:20,
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    valuable1:{
        width:"100%",
        height:"auto",
        alignItems:"center",
        display:"flex"
    },
    valuable2:{
        width:"100%",
        height:"auto",
        alignItems:"center",
        display:"none",
    }
})