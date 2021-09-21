import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        backgroundColor: "#fff",
        width: "100%",
        padding: 10,
        display: 'flex',
        alignItems: "flex-start",
    },

    Title:{
        width: "100%",
        color:"#6c757d",
        fontFamily: "VarelaRound_400Regular",
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 35,
        marginHorizontal: "55%"
    },

    gridList:{
        marginTop: 30,
        borderRadius: 20
    },

    searchBar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        width:"100%",
        marginLeft: 6,
        marginBottom: 30
    },
    descriptionList:{
        color: "#6c757d"
    },

    listCowB:{
        width:"100%",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        marginTop:5,
        padding: 12,
    },

    add:{
        backgroundColor: "#a0c4ff",
        width: 65,
        height: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 400 / 2,
        position: 'absolute',
        left: "80%",
        top: "84%"
    },

    //ModalCadastro

    containerModal:{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: 'flex',
        alignItems:"center"
    },

    modal:{
        position: "absolute",
        top: "25%",
        left: "5%",
        height: "40%",
        backgroundColor: "#fff",
        width: "90%",
        borderRadius: 16,
        paddingLeft: 25,
        paddingRight: 25
    },

    text:{
        marginTop: 50,
        textAlign: "left",
        fontWeight: "bold",
        color: "#6c757d",
        fontFamily: "VarelaRound_400Regular",
    },

    inputName:{
        marginTop: 10,
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
        top: "20%",
    }
})

export default styles;