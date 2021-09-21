import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        padding: 10,
        display: 'flex',
    },

    content:{
        padding: 10,
        marginVertical: 20
    },

    block:{
        backgroundColor:"#fff", 
        padding: 15, 
        borderRadius: 16
    },

    title:{
        width: "100%",
        color:"#6c757d",
        fontFamily: "VarelaRound_400Regular",
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 35,
        marginHorizontal: "80%"
    },

    indicator:{
        fontFamily: "VarelaRound_400Regular",
        color:"#6c757d",
        fontSize: 12
    },

    d:{
        fontSize: 12,
        padding: 5,
        fontFamily: "VarelaRound_400Regular",
    }, 

    inputs:{
        fontFamily:"VarelaRound_400Regular",
        padding: 10,
        width: 320,
        borderRadius: 5,
        borderColor: "#616161",
        borderWidth: 0.2,
        marginVertical: 8   
    },

    //ModalAdiantamento

    containerModal:{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },

    modal:{
        position: "absolute",
        top: "30%",
        left: "5%",
        height: "20%",
        backgroundColor: "#fff",
        width: "90%",
        borderRadius: 16,
        paddingLeft: 25,
        paddingRight: 25
    },

    buttons:{
        display: "flex",
        flexDirection: "row",
    },

    text:{
        marginTop: 30,
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
        width: "50%",
        height: 50,
        borderRadius:  10,
        backgroundColor: "#81b29a",
        justifyContent: "center",
        alignItems: "center",
        top: "10%",
        right: 5
    },

    btn2:{
        width: "50%",
        height: 50,
        borderRadius:  10,
        backgroundColor: "#ffadad",
        justifyContent: "center",
        alignItems: "center",
        top: "10%",
        left: 5
    }
})

export default styles;