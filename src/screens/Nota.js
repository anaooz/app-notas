import AsyncStorage from "@react-native-async-storage/async-storage"
import { FlatList, SafeAreaView, Text, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import { key } from "./NovaNota"

export default function Nota() {
    const [notas, setNotas] = useState([])

    useEffect(() => {
        const obterNota = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(key)
                const nota = jsonValue != null ? JSON.parse(jsonValue) : null
                setNotas(nota)
            } catch (error) {
                console.error(error)
            }
        }

        obterNota()
    }, [])

    console.log("notas:", notas)

    return(
        <FlatList
        data={notas}
        renderItem={({item}) => {
            return(
                <SafeAreaView style={styles.container}>
                    <Text>{item.titulo}</Text>
                    <Text>{item.mensagem}</Text>
                </SafeAreaView>
            )
        }
        }
        keyExtractor={(item) => item.titulo}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});