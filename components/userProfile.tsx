import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
    TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageHeader from './pageComponents/pageHeader';

const UserProfile = () => {
    const [userImage, setUserImage] = useState(require('../assets/TB.jpg'));
    const [userProfileName, setUserProfileName] = useState("Trevor Bernal")
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('Trevor@123');
    const [newPassword, setNewPassword] = useState('');
    const [contact, setContact] = useState('867-888-7890');
    const [email, setEmail] = useState('trevorbernal43@gmail.com');
    const [showNewPassword, setShowNewPassword] = useState(false);

    const [tempUsername, setTempUsername] = useState(username);
    const [tempContact, setTempContact] = useState(contact);
    const [tempEmail, setTempEmail] = useState(email);
    const [tempPassword, setTempPassword] = useState(''); // To store the password when editing

    const handleEditPress = () => {
        setTempUsername(username);
        setTempContact(contact);
        setTempEmail(email);
        setTempPassword(''); // Clear the temp password when entering edit mode
        setIsEditing(true);
    };

    const handleSavePress = () => {
        setUsername(tempUsername);
        setContact(tempContact);
        setEmail(tempEmail);
        setNewPassword(tempPassword); // Save the edited password
        setIsEditing(false);
        setShowNewPassword(false); // Hide password after saving
        //place our login logic here, either check to file or we can implement supabase/firebase to help wtih sharing reports
        //generate objects and send to supa/firebase so we can share reports easier
        console.log('Saving changes:', { username: tempUsername, contact: tempContact, email: tempEmail, newPassword: tempPassword });
    };

    const handleDiscardPress = () => {
        setIsEditing(false);
        setTempUsername(username);
        setTempContact(contact);
        setTempEmail(email);
        setTempPassword(''); // Clear the temp password on discard
        setShowNewPassword(false);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={styles.topHeader.backgroundColor} />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Top Header */}
                <PageHeader title='User Profile'/>

                {/* Profile Box */}
                <View style={styles.profileBox}>
                    <Image
                        source={userImage}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>{userProfileName}</Text>
                </View>

                {/* Information Box */}
                <View style={styles.infoBox}>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Username:</Text>
                        <Text>{username}</Text>
                        {/* keep this for admin editing */}
                        {/* {isEditing ? (
                            <TextInput
                                style={styles.input}
                                value={tempUsername}
                                onChangeText={setTempUsername}
                                autoCapitalize="none"
                            />
                        ) : (
                            <Text>{username}</Text>
                        )} */}
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Password:</Text>
                        {isEditing ? (
                            <View style={styles.passwordInputContainer}>
                                <TextInput
                                    style={styles.passwordInput}
                                    secureTextEntry={!showNewPassword}
                                    placeholder="Enter new password"
                                    value={tempPassword}
                                    onChangeText={setTempPassword}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity onPress={toggleNewPasswordVisibility} style={styles.showPasswordButton}>
                                    <Ionicons
                                        name={showNewPassword ? 'eye-off-outline' : 'eye-outline'}
                                        size={24}
                                        color="gray"
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Text style={styles.passwordPlaceholder}>**********</Text>
                        )}
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Contact:</Text>
                        {isEditing ? (
                            <TextInput
                                style={styles.input}
                                value={tempContact}
                                keyboardType="phone-pad"
                                onChangeText={setTempContact}
                                autoCapitalize="none"
                            />
                        ) : (
                            <Text>{contact}</Text>
                        )}
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Email:</Text>
                        {isEditing ? (
                            <TextInput
                                style={styles.input}
                                value={tempEmail}
                                keyboardType="email-address"
                                onChangeText={setTempEmail}
                                autoCapitalize="none"
                            />
                        ) : (
                            <Text>{email}</Text>
                        )}
                    </View>
                    {/* keep for admin editing
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Account type:</Text>
                        <Text>User</Text>
                    </View> */}


                {/* Edit/Save/Discard Buttons */}
                {isEditing ? (
                    <View style={styles.editButtonsContainer}>
                        <TouchableOpacity style={[styles.editButton, styles.saveButton]} onPress={handleSavePress}>
                            <Text style={styles.editButtonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.editButton, styles.discardButton]} onPress={handleDiscardPress}>
                            <Text style={styles.editButtonText}>Discard</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.editProfileButton} onPress={handleEditPress}>
                        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                )}
                </View>
                {/* Back to Home */}
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity style={styles.backButton}>
                        <Ionicons name='arrow-back' size={24} color="#333" style={{ marginRight: 5 }} />
                        <Text style={styles.backButtonText}>Back to Home</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    topHeader: {
        backgroundColor: '#333',
        paddingVertical: 20,
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileBox: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoBox: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 6,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#eee',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
    },
    backButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#ddd',
        borderRadius: 8,
    },
    backButtonText: {
        fontSize: 16,
        color: '#333',
    },
    editProfileButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20,
    },
    editProfileButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    editButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    editButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        minWidth: 120,
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#28a745',
    },
    discardButton: {
        backgroundColor: '#dc3545',
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    passwordInput: {
        flex: 1,
        padding: 8,
        fontSize: 16,
    },
    showPasswordButton: {
        padding: 8,
    },
    passwordPlaceholder: {
        fontSize: 16,
        color: '#777',
    },
});

export default UserProfile;