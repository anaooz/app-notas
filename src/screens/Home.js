import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { PlusCircle } from 'lucide-react-native';
import icons from "../components/Icons";
import Nota from "./Nota";

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Nota/>
            <Text style={{fontSize: 20}}>Adicione uma nota</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
                <PlusCircle color={icons.color} size={icons.size}/>
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