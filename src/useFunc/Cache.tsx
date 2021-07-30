import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const Get = async (Key) => {
    try {
        return await AsyncStorage.getItem(Key)
    }
    catch (e) {
        return (e)
    }
}

export const Add = async (Key, Value) => {
    try {
        const val = JSON.stringify(Value)
        await AsyncStorage.setItem(Key, val)
    }
    catch (e) {
        alert("Error ! : " + e)
    }
}
export const ClearAll = async () => {
    try {
        await AsyncStorage.clear()
    }
    catch (e) {
        alert("Error ! : " + e)
    }
}

export const Remove = async (Key) => {
    try {
        await AsyncStorage.removeItem(Key)
    }
    catch (e) {
        alert("Error ! : " + e)
    }
}