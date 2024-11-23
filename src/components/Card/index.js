import React, { useEffect, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { View,Text,Image,TouchableOpacity } from 'react-native'


const Card = ({id, name,description,image,color,textColor}) => {
    
    const [descriptionFormatted,setDescriptionFormatted] = useState()

    const formmatedDescription = (id) => {
        
        const splitText = description?.split(" ")

        if(id == 1){
            setDescriptionFormatted(<Text style={styles.textFormatted}>{splitText[0]} {splitText[1]} {`\n`} <Text style={{fontWeight:"bold"}}>{splitText[3]}</Text></Text>) 
        }
        if(id == 2){
            setDescriptionFormatted(<Text style={styles.textFormatted}>{splitText[0]} {splitText[1]}  <Text style={{fontWeight:"bold"}}>{splitText[2]}{`\n`} </Text>{splitText[3]} {splitText[4]}</Text>) 
        }
        if(id == 3){
            setDescriptionFormatted(<Text style={styles.textFormatted}>{splitText[0]} {splitText[1]}  <Text style={{fontWeight:"bold"}}>{splitText[2]}  </Text>{splitText[3]} {`\n`} {splitText[4]} {splitText[5]} {splitText[6]} {splitText[7]} {splitText[8]}</Text>) 
        }
        if(id == 4){
            setDescriptionFormatted(<Text style={styles.textFormatted}>{splitText[0]} {splitText[1]} {`\n`}  <Text style={{fontWeight:"bold"}}>{splitText[2]}  </Text>{splitText[3]}  {splitText[4]} {splitText[5]} {splitText[6]} {splitText[7]} {splitText[8]}</Text>) 
        }
    }

    useEffect(() => {
        formmatedDescription(id)
    },[id])
    

    return(

        <TouchableOpacity style={{...styles.card,backgroundColor:color}}>
            
            <View style={styles.boxText}>
            <Text style={{...styles.textPrimary,color:textColor}}>{name}</Text>
            <Text style={{...styles.textSecondary,color:textColor}}>{descriptionFormatted}</Text>
            </View>
    
            <Image style={styles.image} source={image}/>

        </TouchableOpacity>

    )
}

const styles = ScaledSheet.create({
    card:{
        position:"relative",
        marginBottom:"15@s",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        width:"310@s",
        height:"100@s",
        borderRadius:15,
        paddingLeft:"15@s",
    },
    textPrimary:{
        textTransform:"uppercase",
        color:"white",
        fontWeight:"bold"
    },
    image:{
        position:"absolute",
        right:0,
        width:"185@s",
        height:"185@s",
        objectFit:"contain"
    },
    textFormatted:{
        fontSize:"13@s",
    }
 
})

export default Card