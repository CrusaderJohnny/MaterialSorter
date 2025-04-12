import { View, Text, StyleSheet } from "react-native";
import { CustomTableProps } from "../../types/interfaceTypes";

const CustomTable: React.FC<CustomTableProps> = ({ tableName, headers, data }) => {
    return (
        <View style={styles.tableContainer}>
            {/* Table Name */}
            <View style={styles.tableNameContainer}>
                <Text style={styles.tableNameText}>{tableName}</Text>
            </View>

            {/* Table */}
            <View style={[styles.container, styles.tableBackground]}>
                {/* Table Header */}
                <View style={styles.row}>
                    {headers.map((header, index) => (
                        <Text key={index} style={[styles.headerCell, styles.border, { flex: 1 }]}>
                            {header}
                        </Text>
                    ))}
                </View>

                {/* Table Rows */}
                {data.map((rowData, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                            <Text key={cellIndex} style={[styles.cell, styles.border, { flex: 1 }]}>
                                {cellData}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    tableContainer: {
        margin: 16,
    },
    tableNameContainer: {
        paddingHorizontal: 0,
        paddingTop: 20,
        paddingBottom: 10,
    },
    tableNameText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    container: {
        flex: 1,
        padding: 0, // Adjust padding for the table itself if needed
    },
    tableBackground: {
        backgroundColor: '#e0e0e0', // Light grey background
        borderRadius: 5, // Optional: Add some rounded corners
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    headerCell: {
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cell: {
        padding: 10,
        textAlign: 'center',
    },
    border: {
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
});

export default CustomTable;