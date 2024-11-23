import React from 'react'
import { View,Text,Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

/* COMPONENTS */
import Button from '../../components/Button'
import Terms from '../../components/Terms'
/* IMAGES */
import loginBackground from '../../images/png/login_background.jpg'

const Landing = () => {
    const navigation = useNavigation()

    const redirectToLoginPage = () => {
        navigation.navigate("Login")
    }

    return(

        <View style={styles.container}>

            <View style={styles.boxPrimary}>
                <Image style={styles.backgroundImage} source={loginBackground}/>                
            </View>

            <View style={styles.boxSecondary}>
                <View style={styles.boxTexts}>
                    <Text style={styles.textPrimary}>Bem-vindo à</Text>
                    <Text style={styles.textSecondaryBoxText}>CDT</Text>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.textSecondary}>Carteira Digital de Trânsito</Text>
                </View>

                <Terms/>

                <View style={styles.containerButton}>
                <Button onPress={() => redirectToLoginPage()} secondaryName="gov.br"/>
                </View>
            </View>
        </View>

    )
}

const styles = ScaledSheet.create({
    container:{
        position:"relative",
        flex:1,
    },
    boxPrimary:{
        flex:1,  
    },

    backgroundImage:{
        width:"100%",
        height:"58%"
    },

    boxSecondary:{
        width:"100%",
        height:"358@s",
        paddingTop:"48@s",
        position:"absolute",
        bottom:0,
        backgroundColor:"white",
        zIndex:9999,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
    },

    boxTexts:{
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        height:"35@s",
    },
    textPrimary:{
        color:"#012D6D",
        fontSize:"30@s",
        textAlign:"center",
    },
    textSecondaryBoxText:{
        marginLeft:"7@s",
        fontWeight:"bold",
        color:"#012D6D",
        fontSize:"30@s",
    },

    boxText:{
        justifyContent:"center",
        alignItems:"center",
    },

    textSecondary:{
        marginLeft:"5@s",

        fontWeight:"300",
        color:"#012D6D",
        fontSize:"20@s",
    },
    containerButton:{
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Landing