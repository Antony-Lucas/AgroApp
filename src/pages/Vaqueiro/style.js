import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        backgroundColor: "#a0c4ff",
        width: "100%",
        height: "100%",
        padding: 20,
        display: 'flex',
        alignItems: "flex-start",
    },

    Title:{
        color:"#fff",
        fontFamily: "VarelaRound_400Regular",
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
        marginRight: 15
    },

    Scriin:{
        backgroundColor: "#f5f5f5",
        padding: 20,
        width: "115%",
        height: "100%",
        marginTop: 10,
        left: -20,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },

    button:{
        elevation: 1,
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
        marginTop: 10,
        marginRight: 10,
        borderRadius: 5,
        width: "45%",
        height: "23%"
    },

    buttonExtends:{
        width: "93%",
    },

    Label:{
        fontFamily: "VarelaRound_400Regular",
        fontSize: 12,
        color:"#6c757d"
    }
})

export default styles;