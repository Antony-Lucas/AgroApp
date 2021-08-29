import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#a0c4ff",
        
    },

    header:{
        backgroundColor: "#fff",
        padding: 30,
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    
    solved:{
        position: "absolute",
        top: 60,
        left: "60%",
    },  
    
    title:{
        marginTop: 60,
        marginLeft: 20,
        fontFamily: "VarelaRound_400Regular"
    },

    resume_tasks:{ 
        paddingBottom: 120,
        width: "100%",
        height: "98%",
        backgroundColor: "#fff",
    },

    blockShort:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 25,
        marginTop: 5
    },

    Tasks:{
        marginTop: 10,
        marginLeft: 30,
        marginRight: -20,
        backgroundColor: "#fff",
        width: 150,
        height: "80%",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column-reverse",
        borderColor:"#a0c4ff",
        borderWidth: 1
    },

    deleteTask:{
        backgroundColor: "#a0c4ff",
        height: 30,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    block:{
        marginTop: 5
    },

    progressBar:{
        backgroundColor: "#fff",
        width: "75%",
        borderRadius: 5,
        marginHorizontal: 70,
        marginTop: 5,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    
    colorPercentage:{
        backgroundColor: "#ffadad",
        height: "100%",
        padding: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    user:{
        fontFamily: "VarelaRound_400Regular", 
        marginLeft: 5, 
        marginTop: 15,
        color: "#6c757d"
    }

});

export default styles