import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import PageHeader from './pageComponents/pageHeader';

const PrintPage = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#3498db" />
            <PageHeader title='Print Page'/>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {/* Big Title */}
                    <Text style={styles.bigTitle}>Print Successful</Text>

                    {/* Regular Text and TouchableOpacity Button */}
                    <View style={styles.middleSection}>
                    <Text style={styles.regularText}>Your report has been saved in </Text>
                    <TouchableOpacity style={styles.viewReportsButton} onPress={() => console.log('View Reports Pressed')}>
                        <Text style={styles.viewReportsButtonText}>View Reports</Text>
                    </TouchableOpacity>
                    </View>

                    {/* Big Button at the Bottom */}
                    <TouchableOpacity style={styles.bigButton} onPress={() => console.log('Return to Homepage Pressed')}>
                    <Text style={styles.bigButtonText}>Return to Homepage</Text>
                    </TouchableOpacity>
                </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
},
scrollViewContent: {
    flexGrow: 1, // Allows content to grow and push the bottom button down
    justifyContent: 'space-between', // Distribute space vertically
    alignItems: 'center', // Center items horizontally
    padding: 20,
},
bigTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40, // Add some top margin
},
middleSection: {
    alignItems: 'center', // Center text and button
    marginTop: 30,
},
regularText: {
    fontSize: 16,
    textAlign: 'center',
},
viewReportsButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10, // Space between text and button
},
viewReportsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
},
bigButton: {
    backgroundColor: 'green',
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 30, // Add some bottom margin
},
bigButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
},
});

export default PrintPage;