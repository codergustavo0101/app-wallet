import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import theme from '../../themes/theme'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../images/png/back_icon.png'
import cardapioIcon from '../../images/png/cardapio.png'
import sinoIcon from '../../images/png/sino2.png'

const Header = ({ name, dashboard }) => {

    const navigation = useNavigation()

    const redirectToBackPage = () => {
        navigation.navigate("Landing")

    }

    return (

        <View style={dashboard == true ? styles.container_dash : styles.container}>

            <View style={styles.box}>
                <TouchableOpacity onPress={() => redirectToBackPage()}>
                    {dashboard == true ? <Image source={cardapioIcon} style={styles.backIcon} /> : <Image source={backIcon} style={styles.backIcon} />}
                </TouchableOpacity>
                <Text style={styles.textPrimary}>{name}</Text>
            </View>

            {dashboard == true

                ?
                <View style={styles.box}>
                    <TouchableOpacity >
                        {dashboard == true ? <Image source={sinoIcon} style={{ width: 27, height: 27 }} /> : <></>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile}>
                        <Text style={styles.textProfile}>A</Text>
                    </TouchableOpacity>

                </View>
                :
                <></>
            }

        </View>

    )
}

const styles = ScaledSheet.create({

    container: {

        paddingTop: "15@s",
        paddingLeft: "25@s",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: theme.colors.header_color,
        height: "83@s",
        borderRadius: 10
    },

    container_dash: {
        flexDirection: "row",
        paddingTop: "17@s",
        paddingLeft: "25@s",
        paddingRight: "25@s",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: theme.colors.header_color,
        height: "99@s",
        borderRadius: 10
    },

    box: {
        height: "83@s",
        flexDirection: "row",
        alignItems: "center",

    },
    backIcon: {
        width: "35@s",
        height: "35@s"
    },
    textPrimary: {
        marginLeft: "15@s",
        fontWeight: "bold",
        color: "white"
    },
    profile: {
        marginLeft: "13@s",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 100,
    },
    textProfile: {
        color: "white",
        fontWeight: "bold"
    }

})


export default Header