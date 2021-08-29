import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //Bezerros
    myHome:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //cadastroBezerros
    container:{
        backgroundColor: "#fff",
        height: "100%",
    },

    Back:{
        position: 'absolute',
        top: "5%",
        left: "-4%",
        padding: 15,
        width: 150,
        borderRadius: 60 / 2,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },

    title:{
        fontFamily:"VarelaRound_400Regular",
        fontSize: 18,
        color: 'rgba(0,0,0,0.3)',
        fontWeight: '200',
        margin: 10,
        marginBottom: 30
    },

    grid:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        marginTop: 80,
        borderRadius: 20
    },

    camp:{
        padding: 10,
    },

    inputLabel:{
        fontSize: 12,
        fontFamily:"VarelaRound_400Regular",
        color: "#6c757d",
        marginBottom: 5
    },

    inputText:{
        fontFamily:"VarelaRound_400Regular",
        padding: 10,
        width: 165,
        borderRadius: 5,
        borderColor: "#616161",
        borderWidth: 0.2
    },

    inputTextLong:{
        fontFamily:"VarelaRound_400Regular",
        padding: 10,
        width: 350,
        borderRadius: 5,
        borderColor: "#616161",
        borderWidth: 0.2    
    },

    save:{
        position: 'absolute',
        top: "80%",
        left: "60%",
        padding: 15,
        width: 150,
        borderRadius: 60 / 2,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },

    colorSave:{
        fontFamily:"VarelaRound_400Regular",
        color: "#bdb2ff",
        fontSize: 15
    },

    //DetalhesBezerros

    gridD:{
        padding: 10,
        marginTop: 80,
        borderRadius: 20
    },

    Tasks:{
        width:"100%",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        marginTop:5,
        padding: 12
    },

    //ProfileBezerro
    
    bannerHeader:{
        backgroundColor: "#fff",
        height: "100%",
        marginBottom: "50%",
    },

    bgImage:{
        height: 180,
        resizeMode: 'cover'
    },

    bannerProfile:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profile:{
        position: 'absolute',
        top: -55,
        width:"25%", 
        height: 100, 
        borderRadius: 400 / 2,
    },

    labelProfile:{
        position: 'absolute',
        top: 55,
        color: "#616161",
        fontFamily: "VarelaRound_400Regular",
        fontSize: 18,
        fontWeight: "bold"
    },

    bannerBody:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 90
    },

    bannerData:{
        padding: 20,
        marginLeft: 10
    },

    bannerTitle:{
        fontFamily:"VarelaRound_400Regular",
        fontSize: 15,
        color: 'rgba(0,0,0,0.3)',
        fontWeight: '200',
        marginLeft: 30,
        marginBottom: 10
    },

    bannerLabels:{
        marginBottom: 5,
        fontSize: 12,
        fontFamily: "VarelaRound_400Regular",
    },

    bannerInputs:{
        fontFamily:"VarelaRound_400Regular",
        padding: 10,
        width: 140,
        borderRadius: 5,
        borderColor: "#616161",
        borderWidth: 0.2   
    },

    bannerInputsLong:{
        fontFamily:"VarelaRound_400Regular",
        padding: 10,
        width: 330,
        borderRadius: 5,
        borderColor: "#616161",
        borderWidth: 0.2   
    },

    bannerIcon:{
        backgroundColor: "#bdb2ff",
        width: 65,
        height: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 400 / 2,
        position: 'absolute',
        left: "75%",
        marginTop: 10
    }
})

export default styles;