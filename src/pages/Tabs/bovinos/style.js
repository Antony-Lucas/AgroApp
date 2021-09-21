import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container:{
        backgroundColor: "#a0c4ff",
        height: "100%",
        padding: 20
    },

    Title:{
        color:"#fff",
        fontFamily: "VarelaRound_400Regular",
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30
    },

    Scriin:{
        marginTop: 10,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 5,
        left: -30,
        width: "115%",
        height: "100%",
        
    },

    searchBar:{
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: "95%",
        padding: 10,
        borderRadius: 5
    },

    Tasks:{
        width:"100%",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        padding: 12,
        left: 5
    },

    descriptionList:{
        color: "#6c757d",
    },

    add:{
        backgroundColor: "#a0c4ff",
        position: "absolute",
        width: 65,
        height: 65,
        bottom: 80,
        right: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 400 / 2,
    },

    button:{
        backgroundColor: "#fff",
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        marginTop: 20,
        borderRadius: 5,
    },

    Label:{
        fontFamily: "VarelaRound_400Regular",
    },

    //ModalCadastro

    modal:{
        top: "15%",
        left: "5%",
        backgroundColor: "#fff",
        width: "90%",
        height: "50%",
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius:  10,
        alignItems: 'center'
    },

    text:{
        marginTop: 50,
        textAlign: "left",
        fontWeight: "bold",
        color: "#6c757d",
        fontFamily: "VarelaRound_400Regular",
    },

    inputLong:{
        width: 300,
        marginTop: 10,
        padding: 10,
        fontSize: 13,
        color: "#6c757d",
        backgroundColor: "#f5f5f5",
        borderRadius: 5
    },

    inputShort:{
        width: 140,
        marginTop: 10,
        marginRight: 10,
        padding: 10,
        fontSize: 13,
        color: "#6c757d",
        backgroundColor: "#f5f5f5",
        borderRadius: 5
    },

    btn:{
        width: "100%",
        height: 50,
        borderRadius:  10,
        backgroundColor: "#a0c4ff",
        justifyContent: "center",
        alignItems: "center",
        top: "7%",
    }
})

export default styles;