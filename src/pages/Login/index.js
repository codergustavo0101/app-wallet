import React,{useState} from 'react'

/* COMPONENTS */
import Header from '../../components/Header'
import HeaderSecondary from '../../components/HeaderSecondary'
import Input from '../../components/Input'
import { View,Text,ScrollView } from 'react-native'

import { ScaledSheet } from 'react-native-size-matters'
import theme from '../../themes/theme'

const Login = () => {

    const [cpf,setCpf] = useState()


    return(
        <View style={styles.container}>
            <Header name="ENTRAR COM GOV.BR"/>
            <HeaderSecondary/>
            <ScrollView>
            <View style={styles.containerBox}>
            <View style={styles.box}>
                <Text style={styles.textPrimary}>Identifique-se no gov.br com:</Text>
                <Input name={"CPF"} type={"cpf"} placeholder="Digite seu CPF" onChangeText={setCpf} value={cpf}/>
            </View>
            </View>
            </ScrollView>

        </View>
    )
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.background_page,
    },

    containerBox:{
        marginTop:"50@s",
        justifyContent:"center",
        alignItems:"center"
    },
    box:{
        width:"318@s",
        paddingLeft:"10@s",
        paddingRight:"15@s",        
        height:"320@s",
        backgroundColor:"white",
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    textPrimary:{
        marginTop:"5@s",
        marginBottom:"30@s"
    }
})


export default Login