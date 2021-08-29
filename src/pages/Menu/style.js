import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: "transparent"
    },

    button:{
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 40,
        right: 30,
        backgroundColor: "#a0c4ff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60 / 2,
        shadowRadius: 10,
        shadowColor: "#a0c4ff",
        shadowOpacity: 0.3,
        shadowOffset:{
            height: 10,
        }
    },

    menu:{
        backgroundColor: "#a0c4ff"
    },

    fontMain:{
        fontFamily:"VarelaRound_400Regular",
        color:"#fff",
        fontSize: 10
    },

    textMenu:{

    },

    icon:{
        marginRight: 10
    },

    submenu:{
        width: 130,
        height: 40,
        borderRadius: 48 / 2,
        backgroundColor: "#a0c4ff",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
    }

});

export default styles