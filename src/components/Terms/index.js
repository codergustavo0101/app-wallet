import React from 'react'
import {View,Text} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
const Terms = () => {
    return(

        <View style={styles.container}>
            <Text style={styles.textPrimary}>Ao entrar, você concorda com nosso</Text>
            
            <View style={styles.row}>
            <View style={styles.boxText}>
            <Text style={styles.textSecondary}>Termo de Responsabilidade</Text>
            <View style={styles.border}></View>
            </View>
            <Text style={styles.textPrimaryRow}>e</Text>
            </View>


            <View style={styles.boxTextPrivacity}>
            <Text style={styles.textSecondary}>Politica de Privacidade</Text>
            <View style={styles.borderSecondary}></View>
            </View>

        </View>

    )
}

const styles = ScaledSheet.create({
    container:{
        marginTop:"29@s",
        marginLeft:"15@s",
        justifyContent:"center",
        alignItems:"center",
    },

    row:{
        flexDirection:"row",
        width:"251@s",
        alignItems:"center",
    },

    boxTextPrivacity:{
        width:"251@s",
    },
    
    textPrimaryRow:{
        fontSize:"15@s",
        marginLeft:"5@s"

    },
    textPrimary:{
        fontSize:"15@s",
        width:"255@s",
        textAlign:"center",
    },
    textSecondary:{
        fontWeight:"500",
        color:"#1351B4",
        fontSize:"15@s",
        textAlign:"left",
    },

    border:{
        width:"188@s",
        borderWidth:0.5,
        borderColor:"#1351B4"
    },
    borderSecondary:{
        width:"154@s",
        borderWidth:0.5,
        borderColor:"#1351B4"

    },
   
})

export default Terms