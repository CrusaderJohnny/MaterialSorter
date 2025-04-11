import { useRouter } from 'expo-router';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
import React, { useMemo, useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';


const ViewReports = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const tableProps = {
        foundationHead: ['', 'Cost', 'Handling', 'Waste Potential'],
        foundationTitle: ['Portland Cement', '20% Fly Ash', '20% Wood Ash', '20% Blast Furnace Slag'],
        foundationData: [[25.60, 13, 20], [32, 10, 4], [10,22,6], [2,20,44]]
    };
    const data = [
        {id: 1, name: 'Portland Cement', cost: 20, handling: 15, waste: 20},
        {id: 2, name: '20% Fly ASh', cost: 10, handling: 6, waste: 3},
        {id: 3, name: '20% Wood Ash', cost: 32, handling: 22, waste: 44},
        {id: 4, name: '20% Blast Furnace Slag', cost: 13, handling: 2, waste: 80}
    ]

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />
            <ScrollView>
                {/* Page Heading Title */}
                <View style={styles.pageHeadingContainer}>
                <Text style={styles.pageHeadingText}>Your Customized Report</Text>
                </View>
        
                {/* Table Name */}
                <View style={styles.tableNameContainer}>
                <Text style={styles.tableNameText}>1. Foundation</Text>
                </View>
        
                {/* Mock Table */}
                <View style={[styles.container, styles.tableBackground]}>
                {/* Table Header */}
                <View style={styles.row}>
                    <Text style={[styles.headerCell, styles.border]}>Material</Text>
                    <Text style={[styles.headerCell, styles.border]}>Cost</Text>
                    <Text style={[styles.headerCell, styles.border]}>Handling</Text>
                    <Text style={[styles.headerCell, styles.border]}>Waste Potential</Text>
                </View>
                {/* Table Rows */}
                {data.map((item) => (
                    <View key={item.id} style={styles.row}>
                    <Text style={[styles.cell, styles.border]}>{item.name}</Text>
                    <Text style={[styles.cell, styles.border]}>{item.cost}</Text>
                    <Text style={[styles.cell, styles.border]}>{item.handling}</Text>
                    <Text style={[styles.cell, styles.border]}>{item.waste}</Text>
                    </View>
                ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
    
    const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    pageHeadingContainer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    pageHeadingText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    tableNameContainer: {
        paddingHorizontal: 16,
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
        padding: 16,
    },
    tableBackground: {
        backgroundColor: '#e0e0e0', // Light grey background
        borderRadius: 5, // Optional: Add some rounded corners
        margin: 16, // Optional: Add some margin around the table
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    headerCell: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cell: {
        flex: 1,
        padding: 8,
        textAlign: 'center',
    },
    border: {
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
});
export default ViewReports;