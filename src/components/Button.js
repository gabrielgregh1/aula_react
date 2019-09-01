/*Modules*/
import React from "react"
import{
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from "react-native"
/*Styles*/
import colors from "../style/colors" 
import fonts from "../style/fonts"

export default (props) => {

    return(
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={.7}
        >
            <View style={styles.conteinerButton}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    conteinerButton:{
        alignItems:"center",
        backgroundColor:colors.primary,
        width:"100%",
        padding:15,
        borderRadius:4,
    },
    label:{
        color:"#FFF",
        fontFamily:fonts.medium,
        fontSize:18
    }
})