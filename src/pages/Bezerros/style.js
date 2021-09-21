import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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