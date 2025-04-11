import { View, Text, StyleSheet } from "react-native";
import MainMenu from "../components/menu";

export default function App() {
    return(
        <MainMenu/>
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