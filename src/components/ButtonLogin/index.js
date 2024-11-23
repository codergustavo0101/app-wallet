import React from "react";
import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const ButtonLogin = ({name,secondaryName,onPress,}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>

            <View style={styles.wrapper}>
            <Text style={styles.textPrimary}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    button:{
        marginTop:"23@s",
        marginLeft:"5@s",

        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: "100%",
        height:"41@s",
        borderRadius:20,
        backgroundColor:"#1351B4"
    },

    textPrimary:{
        fontWeight:"bold",
        fontSize:"14@s",
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

export default ButtonLogin