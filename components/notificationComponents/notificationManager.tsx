import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NotificationDropdown from './notificationDropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationManager: React.FC = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const notifications = [
        { id: 1, message: 'New feedback received from Contractor.' },
        { id: 2, message: 'Reminder: Submit weekly report.' },
        { id: 3, message: 'Material prices updated for Q2.' },
    ];

    const handleNotificationPress = (notification: { id: number; message: string }) => {
        console.log('Clicked notification:', notification);
        setIsDropdownVisible(false);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(prev => !prev);
    };

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={toggleDropdown}>
                <Ionicons name="notifications" size={30} color="#555" />
            </TouchableOpacity>
            <NotificationDropdown
                notifications={notifications}
                onNotificationPress={handleNotificationPress}
                visible={isDropdownVisible}
            />
        </SafeAreaView>
    );
};

export default NotificationManager;
