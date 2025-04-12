import { View, Text, StyleSheet } from "react-native";
import { PageHeaderProps } from "../../types/interfaceTypes";

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}>{title}</Text>
        </View>
    );
};

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#3498db', // Example primary color
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#2980b9',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


export default PageHeader;