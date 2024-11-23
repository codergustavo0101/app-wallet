import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { ScaledSheet } from 'react-native-size-matters'
const Input = ({ name, type, placeholder, onChangeText, value, ref }) => {

    return (

        <View>
            <Text style={styles.textPrimary}>{name}</Text>
            <TextInputMask
                ref={ref}
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
    textPrimary: {
        marginBottom: "7@s"

    },
    input: {
        padding: 5,
        height: "43",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#8D8D8D"
    }

})

export default Input