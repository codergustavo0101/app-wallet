import React from 'react'
import {View,Text,Image} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
const CardIdentification = ({name,icon,banking,question}) =>  {
    return(
        <View style={styles.container}>

            {question == true 
            
            ?
            <Image style={{width:"13",height:"13",resizeMode:"contain"}} source={icon}/>
            :
            <Image style={{width:"23",height:"23",resizeMode:"contain"}} source={icon}/>
            }
            {banking == true 
            ?
            <>
            
            <Text style={styles.textPrimarySucess}>{name}</Text>        
            <View style={styles.boxBanking}>
                <Text style={styles.textBanking}>SUA CONTA SERÁ PRATA</Text>
            </View>
            </>
            :

            question == true 
            
            
            ?
            <Text style={styles.textQuestion}>{name}</Text>

            :

            <Text style={styles.textPrimary}>{name}</Text>

            }
            
        </View>

    )
}

const styles = ScaledSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:"18@s",
    },
    textPrimary:{
        marginLeft:"9@s"
    },
    textQuestion:{
        marginLeft:"9@s",
        color:"#1351B4"
    },
    textPrimarySucess:{
        marginLeft:"9@s",
        color:"#008E34",
    },
    boxBanking:{
        marginLeft:"7@s",
        justifyContent:"center",
        alignItems:"center",
        width:"100@s",
        height:"20@s",
        backgroundColor:"#008E34",
    },
    textBanking:{
        textAlign:"center",
        color:"white",
        fontWeight:"400",
        fontSize:"8@s"
    }
})

export default CardIdentification