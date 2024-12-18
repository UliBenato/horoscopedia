import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 20
    },
    titulo: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#4A4E69',
        marginBottom: 10,
        fontFamily: 'Roboto'
    },
    subtitulo: {
        fontSize: 18,
        color: '#888',
        fontStyle: 'italic',
        marginBottom: 30
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#CCC',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
    },
    button: {
        backgroundColor: '#48BFE3',
        height: 50,
        alignItems: 'center',
        borderRadius: 25,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
        elevation: 4,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 16,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 20,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 30,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
    }
})

export default styles;