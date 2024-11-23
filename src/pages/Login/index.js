import React, { useState,useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
/* COMPONENTS */
import Header from '../../components/Header'
import HeaderSecondary from '../../components/HeaderSecondary'
import Input from '../../components/Input'
import ButtonLogin from '../../components/ButtonLogin'
import CardIdentification from '../../components/CardIdentification'
import { View, Text, ScrollView,Alert} from 'react-native'

/* IMAGES */
import idCard from '../../images/png/id-card-solid.png'
import internetBanking from '../../images/png/InternetBanking-green.png'
import cd from '../../images/png/CD.png'
import cdNuvem from '../../images/png/CD-Nuvem.png'
import appGov from '../../images/png/appgov.png'
import circleQuestion from '../../images/png/circle-question.png'

import { ScaledSheet } from 'react-native-size-matters'
import theme from '../../themes/theme'

const Login = () => {
    const navigation = useNavigation()
    const [cpf, setCpf] = useState()

    const cpfRef = useRef(null)

    const handleLogin = () => {
        navigation.navigate("Dashboard")
    }


    return (
        <View style={styles.container}>
            <Header name="ENTRAR COM GOV.BR" />
            <ScrollView>
            <HeaderSecondary />
                <View style={styles.containerBox}>
                    <View style={styles.box}>
                        <Text style={styles.textPrimary}>Identifique-se no gov.br com:</Text>
                        <CardIdentification name="Número do CPF" icon={idCard}/>
                        <Text style={styles.textSecondary}>Digite seu CPF para <Text style={{fontWeight:"bold"}}>criar</Text> ou  <Text style={{fontWeight:"bold"}}>acessar</Text> sua conta gov.br</Text>
                        <Input name={"CPF"} type={"cpf"} ref={cpfRef} placeholder="Digite seu CPF" onChangeText={setCpf} value={cpf} />
                        <ButtonLogin name={"Continuar"} onPress={() => handleLogin()} width={"100%"}/>
                        <Text style={styles.textIdentification}>Outras opções de indentificação:</Text>
                        <CardIdentification name="Login com seu banco" banking={true} icon={internetBanking}/>
                        <CardIdentification name="Seu aplicativo gov.br" icon={appGov}/>
                        <CardIdentification name="Seu certificado digital" icon={cd}/>
                        <CardIdentification name="Seu certificado digital em nuvem" icon={cdNuvem}/>

                        <View style={styles.boxQuestions}>
                        <CardIdentification name="Está com dúvidas é precisa de ajuda?" question={true} icon={circleQuestion}/>
                        <Text style={styles.textTerms}>Termo de Uso e Aviso de Privacidade</Text>
                        </View>

                        <View style={{height:"15"}}></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background_page,
    },
    containerBox: {
        marginTop: "25@s",
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: "318@s",
        paddingTop:"7@s",
        paddingLeft: "10@s",
        paddingRight: "15@s",
        height: "auto",
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    textPrimary: {
        fontSize:"16@s",
        color:"#373737",
        fontWeight:"600",
        marginTop: "5@s",
        marginBottom: "30@s"
    },
    textSecondary:{
        fontSize:"12@s",
        color:"#373737",
        fontWeight:"400",
        marginTop: "5@s",
        marginBottom: "15@s"
    },
    textIdentification:{
        fontSize:"14@s",
        height:"23@s",
        color:"#373737",
        fontWeight:"400",
        marginTop: "15@s",
        marginBottom: "15@s",
        borderBottomWidth:1,
        borderColor:"#9A9A9A"
    },
    boxQuestions:{
        marginTop:"50@s",
        justifyContent:"center",
        alignItems:"center"
    },
    textTerms:{
        color:"#1351B4"
    }
})


export default Login