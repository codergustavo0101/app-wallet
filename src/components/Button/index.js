import React from "react";
import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const Button = ({name,secondaryName,onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>

            <View style={styles.wrapper}>
            <Text style={styles.textPrimary}>ENTRAR COM</Text>
            <Text style={styles.textSecondary}>{secondaryName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    button:{
        marginTop:"38@s",
        marginLeft:"5@s",

        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"245@s",
        height:"34@s",
        borderRadius:20,
        backgroundColor:"#1351B4"
    },

    textPrimary:{
        fontSize:"15@s",
        textTransform:"uppercase",
        color:"white"
    },

    textSecondary:{
        fontSize:"15@s",
        marginLeft:"5@s",
        fontWeight:"bold",
        color:"white"
    },

    wrapper:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }

})

export default Button