import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contenedorFicha:{
        
        backgroundColor: "#0f6566",
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        padding: 10,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#341257",
        borderRadius: 15,
    },
    contenedorDatosGenerales:{
        display: "flex",
        flexDirection:"column",
        

    },
    nombreEnFicha: {
        fontSize: 24,
        color: "#332811",
        fontWeight: "bold",
    },
    datosGeneralesFicha: {
        fontSize: 16,
    },
    FotoPersonajeEnFicha: {
        height: 100,
        width: 100,
        marginRight: 10,

    },
    contenedorScroll: {
        display: "flex",
        flexDirection: "column",

    },
    botonIrInicio:{
        backgroundColor : "#2a0c75",
        borderRadius: 15,
        

    },

    textoBotonIrInicio:{
        color: "#cab6fa",
        textAlign: "center",
        fontSize : 16,
        fontWeight: "bold",
    }

    
});

export default styles;