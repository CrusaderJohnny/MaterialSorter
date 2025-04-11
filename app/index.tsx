import { View, Text, StyleSheet } from "react-native";
import MainMenu from "../components/menu";
import LogIn from "../components/logIn";
import LoginScreen from "../components/logIn";
import GenerateReport from "../components/generateReport";

export default function App() {
    return(
        <GenerateReport/>
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