import React from 'react'
import { View, Text, Image } from 'react-native'
import govIcon from '../../images/png/govbr.png'

import { ScaledSheet } from 'react-native-size-matters'
import faIcon from '../../images/png/fa-icon.png'
import faLibras from '../../images/png/fa-libras.png'

const HeaderSecondary = () => {

    return (

        <View style={styles.container}>
            <Image style={styles.image} source={govIcon} />

            <View style={styles.box}>
                <Image style={{ resizeMode: "contain", width: "19", height: "19", marginRight: 15 }} source={faIcon} />
                <Image style={{ resizeMode: "contain", width: "19", height: "19" }} source={faLibras} />

            </View>

        </View>

    )
}

const styles = ScaledSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60@s",
        backgroundColor: "white",

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        paddingLeft: "15@s",
        paddingRight: "15@s",

    },
    box: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: "100@s",
        resizeMode: "contain"
    }
})

export default HeaderSecondary