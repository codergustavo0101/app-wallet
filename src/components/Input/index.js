import React from 'react'
import {View,Text} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { ScaledSheet } from 'react-native-size-matters'
const Input = ({name,type,placeholder,onChangeText,value}) => {

    return(

        <View>
            <Text style={styles.textPrimary}>{name}</Text>
            <TextInputMask
            style={styles.input}
            type={type}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            />
        </View>
    )
}

const styles = ScaledSheet.create({
    textPrimary:{
        marginBottom:"7@s"

    },
    input:{
        height:"36",
        borderRadius:5,
        borderWidth:1,
        borderColor:"black"
    }

})

export default Input