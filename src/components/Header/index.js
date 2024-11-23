import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import theme from '../../themes/theme'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../images/png/back_icon.png'
const Header = ({name}) => {

    const navigation = useNavigation()

    const redirectToBackPage = () => {
        navigation.navigate("Landing")

    }

    return(

        <View style={styles.container}>
            
            <View style={styles.box}>
                <TouchableOpacity onPress={() => redirectToBackPage()}>
                <Image source={backIcon}  style={styles.backIcon}/>
                </TouchableOpacity>
                <Text style={styles.textPrimary}>{name}</Text>
            </View>
        </View>

    )
}

const styles = ScaledSheet.create({

    container:{

        paddingTop:"15@s",
        paddingLeft:"25@s",
        justifyContent:"center",
        alignItems:"flex-start",
        backgroundColor:theme.colors.header_color,
        height:"83@s",
        borderRadius:10
    },

    box:{
        height:"83@s",
        flexDirection:"row",
        alignItems:"center",
        
    },
    backIcon:{
        width:"35@s",
        height:"35@s"
    },
    textPrimary:{
        marginLeft:"15@s",
        fontWeight:"bold",
        color:"white"
    }

})


export default Header