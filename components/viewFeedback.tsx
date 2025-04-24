import { useRouter } from 'expo-router';
import { useLocalSearchParams} from 'expo-router/build/hooks';
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import PageHeader from './pageComponents/pageHeader';
import CustomTable from './tableComponents/customTable';

const ViewFeedback = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    // Example data for the first table (Foundation) and its comment
    const foundationTableData = {
        tableName: '1. Foundation',
        headers: ['Material', 'Cost', 'Handling', 'Waste Potential'],
        data: [
            ['Portland Cement', 25.60, 13, 20],
            ['20% Fly Ash', 32, 10, 4],
            ['20% Wood Ash', 10, 22, 6],
            ['20% Blast Furnace Slag', 2, 20, 44],
        ],
        comment: 'Note: Costs are based on Q1 2025 estimates.',
    };

    // Example data for a second table (Aggregates) and its comment
    const aggregatesTableData = {
        tableName: '2. Aggregates',
        headers: ['Type', 'Size (mm)', 'Unit Price', 'Availability'],
        data: [
            ['Crushed Stone', '10-20', 15.50, 'In Stock'],
            ['River Gravel', '5-15', 12.00, 'Limited'],
            ['Sand', 'Fine', 8.75, 'In Stock'],
        ],
        comment: 'Availability may vary based on supplier schedules.',
    };

    // Example data for a third table (Admixtures) and its comment
    const admixturesTableData = {
        tableName: '3. Admixtures',
        headers: ['Name', 'Dosage', 'Effect'],
        data: [
            ['Water Reducer', '0.5%', 'Increases workability'],
            ['Retarder', '0.2%', 'Delays setting time'],
        ],
        comment: 'Dosage recommendations are general guidelines.',
    };

    const handlePrint = () => {
        console.log('Print button pressed');
        // Implement routing here
        router.push("/printedPage");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#3498db" />
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <PageHeader title='Your Customized Report' />
                    <CustomTable
                        tableName={foundationTableData.tableName}
                        headers={foundationTableData.headers}
                        data={foundationTableData.data}
                    />
                    {foundationTableData.comment && (
                        <View style={styles.commentBox}>
                            <Text style={styles.commentText}>{foundationTableData.comment}</Text>
                        </View>
                    )}

                    <CustomTable
                        tableName={aggregatesTableData.tableName}
                        headers={aggregatesTableData.headers}
                        data={aggregatesTableData.data}
                    />
                    {aggregatesTableData.comment && (
                        <View style={styles.commentBox}>
                            <Text style={styles.commentText}>{aggregatesTableData.comment}</Text>
                        </View>
                    )}

                    <CustomTable
                        tableName={admixturesTableData.tableName}
                        headers={admixturesTableData.headers}
                        data={admixturesTableData.data}
                    />
                    {admixturesTableData.comment && (
                        <View style={styles.commentBox}>
                            <Text style={styles.commentText}>{admixturesTableData.comment}</Text>
                        </View>
                    )}
                </ScrollView>
                <TouchableOpacity onPress={handlePrint} style={styles.printButton}>
                    <Text style={styles.printButtonText}>Print</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
        padding: 0,
    },
    tableBackground: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
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
    printButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 5,
    },
    printButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    commentBox: {
        backgroundColor: '#FFFFE0', // Light yellow color
        padding: 10,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#BDB76B', // Darker yellow border
    },
    commentText: {
        fontSize: 14,
        color: '#333',
    },
});

export default ViewFeedback;