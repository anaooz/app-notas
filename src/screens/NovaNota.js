import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckCircle2 } from 'lucide-react-native';
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function NovaNota({ navigation }) {
    const [titulo, setTitulo] = useState('')
    const [mensagem, setMensagem] = useState('')

    const key = '@storage_nota'

    const inserirNota = async (value) => {
        try {
            const nota = {
                titulo: titulo,
                mensagem: mensagem
            }

            const stringNota = JSON.stringify(nota)

            await AsyncStorage.setItem(key, stringNota)
            console.log(value)
        } catch (error) {
            console.error(error)
        }
    }

    const obterNota = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null
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
                <CheckCircle2 color="green" size={40}/>
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