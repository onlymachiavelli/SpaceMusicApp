import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native'
import { Settings, common } from './Style'
import { Moon, Sun, Language as Lann, Instagram, Twitter, Linkedin, Gmail } from "./svg"
import Language from './languages'
let lan = Language.English
const Setting = ({ navigation }) => {
    return (
        <View style={Settings.Container}>
            <View style={{ marginTop: 25 }}>
                <Text style={common.Label}>
                    {lan.settings}
                </Text>
            </View>
            <TouchableOpacity onPress={() => { }} style={Settings.B_button}>
                <View style={Settings.btnicon}>
                    <Moon />
                </View>
                <Text style={Settings.btnTXT}>
                    {lan.display + " : " + lan.dark}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }} style={Settings.B_button}>
                <View style={Settings.btnicon}>
                    <Lann />
                </View>
                <Text style={Settings.btnTXT}>
                    {lan.language + " : " + lan.english}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={Settings.report_btn}>
                <Text style={Settings.report_btn_txt}>

                    {lan.report}
                </Text>
            </TouchableOpacity>
            <View style={Settings.socialMediacontainer}>
                <TouchableOpacity style={Settings.social_btn} onPress={
                    () => {
                        Linking.openURL("https://instagram.com/onlymachiavelli")
                    }
                }>
                    <Text>
                        <Instagram />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Settings.social_btn} onPress={
                    () => {
                        Linking.openURL("https://instagram.com/onlymachiavelli")
                    }}>
                    <Text>
                        <Twitter />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Settings.social_btn} onPress={
                    () => {
                        Linking.openURL("https://instagram.com/onlymachiavelli")
                    }}>
                    <Text>
                        <Linkedin />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Settings.social_btn} onPress={
                    () => {
                        Linking.openURL("https://instagram.com/onlymachiavelli")
                    }}>
                    <Text>
                        <Gmail />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Setting