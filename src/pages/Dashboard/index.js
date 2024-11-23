import React from "react";
/* COMPONENTS */
import Header from "../../components/Header";
import Card from "../../components/Card";
import { ScaledSheet } from "react-native-size-matters";
import { ScrollView, View } from "react-native";

/* IMAGES */
import dashCondutor from '../../images/png/dash_condutor.png'
import dashVeiculo from '../../images/png/dash_veiculos.png'
import dashInfracoes from '../../images/png/dash_infracoes.png'
import dash_educacao from '../../images/png/dash_educacao.png'

const Dashboard = () => {
    return(
        <View>
            <ScrollView>
            <Header name={"CDT"} dashboard={true}/>
            <View style={styles.box}>
            <Card id={1} name={"CONDUTOR"} description={`Gerencie sua \n habilitação`} color={"#00A85A"} textColor={"white"} image={dashCondutor}/>
            <Card id={2} name={"VEICULOS"}  description={`Acesso ao CRLV-e, venda digital`}color={"#FFCC2A"} textColor={"black"} image={dashVeiculo}/>
            <Card id={3} name={"INFRAÇÕES"}  description={"Visualize e pague infrações com até 40% de desconto"}color={"#1A3493"} textColor={"white"} image={dashInfracoes}/>
            <Card id={4} name={"EDUCAÇÃO"}   description={"Conheça nossas campanhas e projetos"} color={"#64B4EF"} textColor={"black"} image={dash_educacao}/>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create({
    box:{
        marginTop:"16@s",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Dashboard