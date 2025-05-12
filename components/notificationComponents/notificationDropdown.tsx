import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NotificationDropdownProps {
    notifications: { id: number; message: string }[];
    onNotificationPress: (notification: { id: number; message: string }) => void;
    visible: boolean;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ notifications, onNotificationPress, visible }) => {
    if (!visible) return null;

    return (
        <View style={styles.dropdownContainer}>
            {notifications.length === 0 ? (
                <Text style={styles.emptyText}>No new notifications</Text>
            ) : (
                notifications.map(notification => (
                    <TouchableOpacity
                        key={notification.id}
                        style={styles.notificationItem}
                        onPress={() => onNotificationPress(notification)}
                    >
                        <Text style={styles.notificationText}>{notification.message}</Text>
                    </TouchableOpacity>
                ))
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        position: 'absolute',
        top: 50, 
        right: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        elevation: 5,
    },
    notificationItem: {
        paddingVertical: 8,
    },
    notificationText: {
        fontSize: 14,
        color: '#333',
    },
    emptyText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
});

export default NotificationDropdown;
