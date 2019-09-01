/*Modules*/
import React from "react"
import { 
    Alert,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native"
import Icon from "react-native-vector-icons/Fontisto"
/*Components*/
import Button from "../components/Button"
/*Image*/
import man from "../../assets/man.png"
/*Fonts*/
import fonts from "../style/fonts"
import colors from "../style/colors"
/*Functions and Contants*/
import despesas,{ createVetorByData, returnDay, totalDespesas} from "../functions/despesas"



export default class Dashboard extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            itemGraph:[
                {
                    id: 1,
                    porcent:30,
                    day: 23,
                },
                {
                    id: 2,
                    porcent:60,
                    day: 24,
                },
                {
                    id: 3,
                    porcent:70,
                    day: 25,
                },
                {
                    id: 4,
                    porcent:20,
                    day: 26,
                },
                {
                    id: 5,
                    porcent:80,
                    day: 27,
                },
                {
                    id: 6,
                    porcent:70,
                    day: 28,
                },
                {
                    id: 7,
                    porcent:75,
                    day: 29,
                },
                {
                    id: 8,
                    porcent:20,
                    day: 30,
                }
            ],
            obj_despesas:totalDespesas(despesas)
        }
    }

    componentDidMount(){
        StatusBar.setBackgroundColor("#FFF")
        StatusBar.setBarStyle("dark-content")
    }

    createPorcent(valor){
        const tamanho = 130
        const max = 2000
        var porcentagem=0
        
        if(valor>0){ 
            porcentagem = 100*valor/max  
        }
        tamanhoBlock = tamanho * porcentagem/100
        


        return tamanhoBlock
    }

    changeColor(valor){ 
        return valor > 500 ? colors.primary : "#CCC"
    }

    render(){
        return(
            <View style={styles.conteiner}>
                <ScrollView>
                <View style={styles.conteinerTop}>
                    <View style={styles.conteinerHeader}>
                        <View style={styles.block}/>
                        <Text style={styles.titleName}>Hello Matt</Text>
                        <View style={styles.conteinerImagem}>
                            <Image
                                source={man}
                                style={styles.imagem}
                            />
                        </View>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.conteinerCard}>
                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={() => Alert.alert("Calma ai","Está função ainda não foi criada!")}
                            >
                                <View style={styles.conteinerPlus}>
                                    <Icon
                                        name="plus-a"
                                        size={14}
                                        color="rgb(20,20,20)"
                                        style={styles.icon}
                                    />
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={.7}
                            >
                                <View style={styles.conteinerBlue}> 
                                    <Text style={styles.priceCart}>R$ {this.state.obj_despesas.saldo}</Text>
                                    <Text style={styles.labelTypeBlue}>carteira</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                activeOpacity={.7}
                            >
                                <View style={styles.conteinerGray}> 
                                    <Text style={styles.priceDeb}>R$ {this.state.obj_despesas.despesas}</Text>
                                    <Text style={styles.labelTypeGray}>despesas</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.conteinerBody}> 
                    <Text style={styles.titleGraph}>Gráfico transações</Text> 
                    <View style={styles.conteinerPrices}>
                        <View style={styles.conteinerBlock}>
                            <Text style={styles.titleCarteira}>Carteira</Text> 
                            <Text style={styles.priceCarteiraGreen}>+ R${this.state.obj_despesas.saldo}</Text> 
                        </View>
                        <View style={styles.verticalLine}/>
                        <View style={styles.conteinerBlock}>
                            <Text style={styles.titleCarteira}>Despesas</Text> 
                            <Text style={styles.priceCarteiraRed}>- R${this.state.obj_despesas.despesas}</Text> 
                        </View>
                    </View> 
                    <View style={styles.conteinerList}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            contentContainerStyle={styles.conteintblockGraph}
                            data={createVetorByData(despesas)}
                            keyExtractor={(item, index) => item.id.toString()}
                            renderItem={({item}) =>
                                <View>
                                    <View style={[styles.blockGraph, {height:this.createPorcent(item.valor), backgroundColor:this.changeColor(item.valor)}]}/>
                                    <Text style={styles.labelGraph}>{returnDay(item.data) }</Text>
                                </View>   
                            }
                        /> 
                        
                    </View> 
                    <View style={styles.conteinerTitle}>
                        <Text style={styles.titleGraph}>Ultimas transações</Text> 
                    </View>
                    <View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={despesas}
                            keyExtractor={(item, index) => item.id.toString()}
                            renderItem={({item}) => 
                                <View style={styles.mov}>
                                    <View style={styles.conteinerImageTitle}>
                                        <View style={styles.conteinerMov}>
                                            <Icon
                                                name="arrow-swap"
                                                size={14}
                                                color="rgb(20,20,20)"
                                                style={styles.icon}
                                            />   
                                        </View>
                                        <View style={styles.conteinerLabels}>
                                            <Text style={styles.labelConta}>{item.label}</Text>
                                            <Text>{item.saldo == 1 ? "saldo" :  "debito"}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.conteinerLabels}>
                                        <Text>{item.saldo == 1 ? "+" :  "-"} R${item.valor}</Text> 
                                    </View>
                                </View>
                            }
                        />
                    </View>
                    <View style={styles.lineHorizontal}/> 
                    <Button
                        onPress={() => Alert.alert("Hey","Esta aqui também não!")}
                        label="Adicionar"
                    />
                </View>
                </ScrollView>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor:"#F5F5F5",
        height:"100%",
        width:"100%"
    },
    conteinerBody:{
        height:"100%",
        padding:20,
        paddingTop:30,
    },
    conteinerHeader:{
        height:80,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        width:"100%"
    },
    conteinerImagem:{ 
        height:45,
        width:45,
        borderWidth:0.5,
        borderColor:"#F5F5F5",
        borderRadius:100,
        alignItems:"center"
    },
    conteinerCard:{
        flexDirection:"row",
        paddingLeft:20,
        height:120,
        width:"100%",
    },
    conteinerPlus:{
        alignItems:"center",
        borderRadius:10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: "#CCC",
        height:45,
        width:45,
    },
    conteinerBlue:{
        backgroundColor:colors.primary,
        borderRadius:10,
        flexDirection:"row",
        height:45,
        justifyContent:"space-between",
        marginLeft:15,
        paddingLeft:15,
        paddingRight:15,
        width:200,
    },
    conteinerGray:{
        backgroundColor:"#F5F5F5",
        borderRadius:10,
        flexDirection:"row",
        height:45,
        justifyContent:"space-between",
        marginLeft:15,
        paddingLeft:15,
        paddingRight:15,
        marginRight:20,
        width:200,
    },
    conteinerTop:{
        backgroundColor:"#FFF",
        height:175,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
        width:"100%"
    },
    conteinerPrices:{
        borderRadius:10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: "#CCC",
        flexDirection:"row",
        justifyContent:"space-between",
        height:80,
        marginTop:20,
        width:"100%",
    },
    conteinerList:{
        height:130,
        marginTop:20,
        marginBottom:10
    },
    conteintblockGraph:{
        flex:1,
        height:130,
        flexDirection:"row",
        justifyContent:"space-between",
        // marginTop:20,
        width:"100%",
        // marginTop:"auto"
    },
    conteinerMov:{
        alignItems:"center",
        borderColor:"#CCC",
        borderWidth:1,
        borderRadius:8, 
        height:40,
        marginTop:"auto",
        marginBottom:"auto",
        width:40
    },
    conteinerTitle:{
        paddingBottom:20
    },
    conteinerLabels:{
        marginLeft:20,
        marginTop:"auto",
        marginBottom:"auto"
    },
    conteinerImageTitle:{
        flexDirection:"row"
    },
    conteinerListDesp:{

    },
    labelConta:{
        color:"rgb(20,20,20)",
        fontFamily:fonts.bold,
        fontSize:14
    },
    blockGraph:{
        borderRadius:10,
        height:60,
        width:7,
        marginTop:"auto",
        marginLeft:3,
        marginBottom:5,
        backgroundColor:"#CCC"
    },
    mov:{
        borderColor:"#CCC", 
        // borderBottomWidth:1,
        justifyContent:"space-between",
        borderTopWidth:1,
        flexDirection:"row",
        height:80, 
        width:"100%"

    },
    verticalLine:{
        height:40,
        borderRightWidth:1,
        borderColor:"#CCC",
        marginTop:"auto",
        marginBottom:"auto",
        width:1
    },
    lineHorizontal:{ 
        marginBottom:20,
        borderColor:"#CCC",
        borderTopWidth:1,
        // height:,
        width:"100%"
    },
    conteinerBlock:{
        paddingTop:15,
        paddingBottom:15,
        paddingRight:25,
        paddingLeft:25,
    },
    priceCart:{
        color:"#FFF",
        fontFamily:fonts.medium,
        fontSize:12,
        marginTop:"auto",
        marginBottom:"auto"
    },
    priceDeb:{
        color:"rgb(20,20,20)",
        fontFamily:fonts.medium,
        fontSize:12,
        marginTop:"auto",
        marginBottom:"auto"
    },
    labelGraph:{
        color:"#CCC",
        fontFamily:fonts.bold,
        fontSize:12,
    },
    labelTypeBlue:{
        color:"rgba(255,255,255,.7)",
        fontFamily:fonts.regular,
        fontSize:12,
        marginTop:"auto",
        marginBottom:"auto"
    },
    labelTypeGray:{
        color:"rgba(20,20,20,.7)",
        fontFamily:fonts.regular,
        fontSize:12,
        marginTop:"auto",
        marginBottom:"auto"
    }, 
    titleName:{
        color:"rgb(20,20,20)",
        fontSize:14,
        fontFamily:fonts.medium,
        marginTop:"auto",
        marginBottom:"auto"
    },
    titleGraph:{
        color:"rgb(20,20,20)",
        fontFamily:fonts.medium,
        fontSize:14,
        paddingTop:20
    },
    titleCarteira:{
        color:"rgb(128,128,128)",
        fontFamily:fonts.bold,
        fontSize:13,
        marginLeft:10,
        marginLeft:10
    },
    priceCarteiraGreen:{
        color:"rgba(50,205,50,.8)",
        fontFamily:fonts.bold,
        fontSize:15,
    },
    priceCarteiraRed:{
        color:"rgba(178,34,34,.8)",
        fontFamily:fonts.bold,
        fontSize:15,
    },
    icon:{
        marginTop:"auto",
        marginBottom:"auto"
    },
    imagem:{
        height:30,
        marginTop:"auto",
        marginBottom:"auto",
        width:30
    },
    block:{
        height:45,
        width:45,
    }
})