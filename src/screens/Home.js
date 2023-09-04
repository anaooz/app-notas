import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { PlusCircle } from 'lucide-react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Adicione uma nota</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
                <PlusCircle color='green'/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});