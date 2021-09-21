import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        backgroundColor: "#f5f5f5",
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
        marginHorizontal: "65%"
    },

    subTitle:{
        width: "100%",
        color:"#6c757d",
        fontFamily: "VarelaRound_400Regular",
        fontSize: 15,
        fontWeight: 'bold',
        top: 25,
        marginHorizontal: "3%"
    },
    
    gridList:{
        marginTop: 50,
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
    
    listCowB:{
        width:"100%",
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        marginTop:5,
        padding: 12
    },
})

export default styles; 