import React from 'react'
import { View, Text } from 'react-native'
import { Settings } from './svg'
import Language from './languages'
import { SettS } from './Style'
const Lan = Language.English
export const Sett = () => {
    return (
        <View style={SettS.st}>
            <Settings />
            <Text style={SettS.txt} >
                {Lan.settings}
            </Text>
        </View>
    )
}