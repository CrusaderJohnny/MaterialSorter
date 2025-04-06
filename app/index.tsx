import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is the first page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    text: {
        textAlign: 'center'
    }
})