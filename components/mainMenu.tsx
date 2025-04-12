import { useRouter } from 'expo-router';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PageHeader from './pageComponents/pageHeader';

const MainMenu = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const user = "Guest";

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Optional: Set status bar style for better consistency */}
            <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

            {/* Header Section */}
            <View style={styles.header}>
                {/* Spacer View to push icons to the right */}
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name='person-circle' size={30} color="#555" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name='notifications' size={30} color="#555" />
                </TouchableOpacity>
            </View>

            {/* Welcome Message Section */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>
                    Welcome {user}
                </Text>
            </View>

            {/* Button Section */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Generate Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>View Reports</Text>
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
    header: {
        flexDirection: 'row', // Arrange items horizontally
        justifyContent: 'space-between', // Push icons to the right
        paddingHorizontal: 15, // Horizontal padding
        paddingVertical: 10, // Vertical padding
        alignItems: 'center', // Align items vertically
    },
    iconButton: {
        padding: 5, // Slightly larger touch area
    },
    welcomeContainer: {
        flex: 1, // Takes up remaining vertical space between header and buttons
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        padding: 20, // Add some padding around the text
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Dark grey text color for contrast
        textAlign: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 30, // Horizontal padding for the button area
        paddingBottom: 30, // Padding at the bottom
        // No specific flex needed, it will sit below the welcomeContainer
    },
    button: {
        borderWidth: 1, // Outline width
        borderColor: '#007AFF', // Standard blue color for outline/text
        borderRadius: 8, // Slightly rounded corners
        paddingVertical: 12, // Vertical padding inside button
        paddingHorizontal: 20, // Horizontal padding inside button
        marginBottom: 15, // Space below each button
        alignItems: 'center', // Center text horizontally within the button
        backgroundColor: '#fff', // White background for the button itself for contrast
    },
    buttonText: {
        color: '#007AFF', // Matching blue text color
        fontSize: 16,
        fontWeight: '600', // Semi-bold
    },
});

export default MainMenu;