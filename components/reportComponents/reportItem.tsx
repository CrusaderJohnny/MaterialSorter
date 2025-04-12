import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ReportItemProps } from "../../types/interfaceTypes";

const ReportItem: React.FC<ReportItemProps> = ({ report, onEdit, onViewFeedback }) => {
    return (
        <View style={reportItemStyles.container}>
            <Text style={reportItemStyles.title}>{report.title}</Text>
            <View style={reportItemStyles.actions}>
                <TouchableOpacity style={reportItemStyles.button} onPress={onEdit}>
                    <Text style={reportItemStyles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={reportItemStyles.button} onPress={onViewFeedback}>
                    <Text style={reportItemStyles.buttonText}>View Feedback</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const reportItemStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        flex: 1,
    },
    actions: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#f39c12', // Example action button color
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ReportItem;