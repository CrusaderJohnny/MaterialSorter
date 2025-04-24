import { Tabs, useRouter } from 'expo-router';
import { useLocalSearchParams} from 'expo-router/build/hooks';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import PageHeader from './pageComponents/pageHeader';
import CustomTable from './tableComponents/customTable';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ViewReports = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [foundationTableData, setFoundationTableData] = useState<{
        tableName: string;
        headers: string[];
        data: (string | number)[][];
    } | null>(null);

    const retrieveSortedData = async () => {
        try {
            const jsonData = await AsyncStorage.getItem('sortedReport');
            if (jsonData !== null) {
                const retrievedData = JSON.parse(jsonData);
                console.log("Retrieved data:", retrievedData);

                if (retrievedData && retrievedData.length > 0) {
                    const tableData = {
                        tableName: '1. Foundation',
                        headers: ['Material', 'Cost', 'Handling', 'Waste Potential'],
                        data: [
                            [retrievedData[0]?.name || '', retrievedData[0]?.cost || '', retrievedData[0]?.handling || '', retrievedData[0]?.waste_potential || ''],
                            [retrievedData[1]?.name || '', retrievedData[1]?.cost || '', retrievedData[1]?.handling || '', retrievedData[1]?.waste_potential || ''],
                            [retrievedData[2]?.name || '', retrievedData[2]?.cost || '', retrievedData[2]?.handling || '', retrievedData[2]?.waste_potential || ''],
                            [retrievedData[3]?.name || '', retrievedData[3]?.cost || '', retrievedData[3]?.handling || '', retrievedData[3]?.waste_potential || ''],
                        ],
                    };
                    setFoundationTableData(tableData);
                } else {
                    console.log("Retrieved data is empty or invalid for table.");
                    setFoundationTableData({
                        tableName: '1. Foundation',
                        headers: ['Material', 'Cost', 'Handling', 'Waste Potential'],
                        data: [
                            ['No Data', '', '', ''],
                            ['No Data', '', '', ''],
                            ['No Data', '', '', ''],
                            ['No Data', '', '', ''],
                        ],
                    });
                }
            } else {
                console.log("No sorted data found in AsyncStorage.");
                setFoundationTableData({
                    tableName: '1. Foundation',
                    headers: ['Material', 'Cost', 'Handling', 'Waste Potential'],
                    data: [
                        ['No Data', '', '', ''],
                        ['No Data', '', '', ''],
                        ['No Data', '', '', ''],
                        ['No Data', '', '', ''],
                    ],
                });
            }
        } catch (error) {
            console.error("Error retrieving data from AsyncStorage:", error);
            setFoundationTableData({
                tableName: '1. Foundation',
                headers: ['Material', 'Cost', 'Handling', 'Waste Potential'],
                data: [
                    ['Error', '', '', ''],
                    ['Error', '', '', ''],
                    ['Error', '', '', ''],
                    ['Error', '', '', ''],
                ],
            });
        }
    };

    useEffect(() => {
        retrieveSortedData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    // Example data for a second table (Aggregates) - This data is static
    const aggregatesTableData = {
        tableName: '2. Aggregates',
        headers: ['Type', 'Size (mm)', 'Unit Price', 'Availability'],
        data: [
            ['Crushed Stone', '10-20', 15.50, 'In Stock'],
            ['River Gravel', '5-15', 12.00, 'Limited'],
            ['Sand', 'Fine', 8.75, 'In Stock'],
        ],
    };

    // Example data for a third table (Admixtures) - This data is static
    const admixturesTableData = {
        tableName: '3. Admixtures',
        headers: ['Name', 'Dosage', 'Effect'],
        data: [
            ['Water Reducer', '0.5%', 'Increases workability'],
            ['Retarder', '0.2%', 'Delays setting time'],
        ],
    };

    const handlePrint = () => {
        console.log('Print button pressed');
        router.push("/printedPage");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#3498db" />
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <PageHeader title='Your Customized Report' />
                    {foundationTableData && (
                        <CustomTable
                            tableName={foundationTableData.tableName}
                            headers={foundationTableData.headers}
                            data={foundationTableData.data}
                        />
                    )}

                    <CustomTable
                        tableName={aggregatesTableData.tableName}
                        headers={aggregatesTableData.headers}
                        data={aggregatesTableData.data}
                    />

                    <CustomTable
                        tableName={admixturesTableData.tableName}
                        headers={admixturesTableData.headers}
                        data={admixturesTableData.data}
                    />
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
});

export default ViewReports;