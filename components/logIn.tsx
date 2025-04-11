import React, { useState } from 'react'; // Import useState for handling input
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity, // Use TouchableOpacity for the button
    StyleSheet,
    KeyboardAvoidingView, // To prevent keyboard from hiding inputs
    Platform, // To check OS for KeyboardAvoidingView behavior
    ScrollView, // To allow scrolling if content overflows on small screens
    StatusBar
} from 'react-native';

const LoginScreen = () => {
    // State for input fields
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const login1 = require('../assets/login.jpg');
    const login2 = require('../assets/login2.jpg');

    // Placeholder function for login logic
    const handleLogin = () => {
        console.log('Login attempt with:', { email, pass });
        // Add authentication logic here
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />
            <KeyboardAvoidingView
                // Adjust behavior based on platform
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingView}
                // Optional: Adjust keyboardVerticalOffset if header is fixed/tall
                // keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            >
                {/* Use ScrollView to handle smaller screens where content might overflow */}
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    {/* Main Content Container */}
                    <View style={styles.contentContainer}>
                        {/* App Title */}
                        <Text style={styles.title}>MatSort</Text>

                        {/* Image */}
                        <View style={styles.imageContainer}>
                            <Image source={login2} style={styles.image} resizeMode="contain" />
                        </View>

                        {/* Form Section */}
                        <View style={styles.formContainer}>
                            {/* Email Input */}
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setEmail} // Use the state setter
                                    value={email} // Control the input value
                                    placeholder='Enter your email'
                                    placeholderTextColor="#999" // Lighter placeholder text
                                    keyboardType="email-address" // Set appropriate keyboard
                                    autoCapitalize="none" // Don't capitalize email
                                />
                            </View>

                            {/* Password Input */}
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setPass} // Use the state setter
                                    value={pass} // Control the input value
                                    placeholder='Enter your password'
                                    placeholderTextColor="#999" // Lighter placeholder text
                                    secureTextEntry={true} // Hide password characters
                                />
                            </View>

                            {/* Login Button */}
                            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f2f5', // Light background color
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1, // Ensure ScrollView content can grow
        justifyContent: 'center', // Center content vertically
        paddingHorizontal: 20, // Add horizontal padding to the whole scroll view
        paddingVertical: 30, // Add vertical padding
    },
    contentContainer: {
        width: '100%', // Content takes full width within padding
        alignItems: 'center', // Center items horizontally
    },
    title: {
        fontSize: 40, // Large font size for the title
        fontWeight: 'bold',
        color: '#333', // Dark text color
        marginBottom: 30, // Space below the title
        textAlign: 'center',
    },
    imageContainer: {
        marginBottom: 40, // Space below the image
        alignItems: 'center', // Ensure image is centered if container is wider
    },
    image: {
        width: 250, // Specify image width
        height: 250, // Specify image height
        borderRadius: 175, // Optional: Make it circular if desired
    },
    formContainer: {
        width: '100%', // Form takes full width
    },
    inputGroup: {
        marginBottom: 20, // Space between input fields
        width: '100%', // Ensure input group takes full width
    },
    label: {
        fontSize: 14,
        color: '#555', // Slightly lighter label color
        marginBottom: 8, // Space between label and input
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#ffffff', // White background for input
        borderWidth: 1,
        borderColor: '#ccc', // Subtle border color
        borderRadius: 8, // Rounded corners
        paddingHorizontal: 15, // Horizontal padding inside input
        paddingVertical: 12, // Vertical padding inside input
        fontSize: 16, // Standard input text size
        color: '#333', // Input text color
        width: '100%', // Input takes full width of its container
    },
    loginButton: {
        backgroundColor: '#007AFF', // Primary button color (iOS blue)
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center', // Center text inside button
        marginTop: 10, // Space above the button
        width: '100%', // Button takes full width
        shadowColor: "#000", // Optional: Add shadow for depth
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    loginButtonText: {
        color: '#ffffff', // White text on button
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;