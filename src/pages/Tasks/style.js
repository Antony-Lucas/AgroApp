import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#a0c4ff",
    },

    header:{
        backgroundColor: "#a0c4ff",
        padding: 30,
        height: 120,
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
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
        height: '100%',
        flexGrow: 0
    },

    charts:{
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        marginLeft: 15,
        bottom: 35    
    },

    inCharts:{
        display: 'flex', 
        flexDirection: 'row', 
        paddingHorizontal: 15,
    },
    
    pizzaCharts:{
        backgroundColor: "#fff",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center", 
        marginTop: 10,
        paddingHorizontal: 10,
        width: "100%",
        height: "40%",
        borderRadius: 16,
    },

    buttonLink:{
        backgroundColor: "#fff",
        top: 10,
        left: 90,
        padding: 15,
        borderRadius: 5,
        display: "flex",
        flexDirection: 'row',
        alignItems: "center", 
        justifyContent: "center",
        elevation: 2
    },

    linkTo:{
        fontSize: 12,
        fontFamily: "VarelaRound_400Regular", 
        color: "#6c757d"
    },

    block:{
        bottom: 60,
        height: "100%"
    },

    progressBar:{
        backgroundColor: "#fff",
        width: "75%",
        borderRadius: 5,
        marginHorizontal: 58,
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