import { View, Text, StyleSheet } from "react-native";
import ViewReports from "../components/report";
import PrintPage from "../components/printPage";


export default function App() {
    return(
        <PrintPage/>
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