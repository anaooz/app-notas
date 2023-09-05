import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckCircle2 } from 'lucide-react-native';
import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import icons from "../components/Icons";

export const key = '@storage_nota'

export default function NovaNota({ navigation }) {
    const [titulo, setTitulo] = useState('')
    const [mensagem, setMensagem] = useState('')
    
    const inserirNota = async (value) => {
        try {
            const nota = {
                id: id,
                titulo: titulo,
                mensagem: mensagem
            }

            if(nota.titulo != "") {
                const stringNota = JSON.stringify(nota)
    
                await AsyncStorage.setItem(key, stringNota)
                navigation.goBack()
                console.log(value)
            } else{
                Alert.alert("Título vazio", "O campo Título é obrigatório!")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <View style={styles.container}>
            <TextInput 
            value={titulo} 
            onChangeText={setTitulo}
            placeholder="Título"
            style={styles.input}/>
            <TextInput 
            value={mensagem} 
            onChangeText={setMensagem}
            placeholder="Mensagem"
            style={[styles.input, styles.message]}/>
            <TouchableOpacity onPress={() => inserirNota([titulo, mensagem])}>
                <CheckCircle2 color={icons.color} size={icons.size}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
        paddingHorizontal: 100
    },
    message: {
        margin: 6,
        paddingVertical: 10
    }
});