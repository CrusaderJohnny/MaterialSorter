import { useRouter } from 'expo-router';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
import React, { useMemo, useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import PageHeader from './pageComponents/pageHeader';


const GenerateReport = () => {
    const [firstPriority, setFirstPriority] = useState(null);
    const [secondPriority, setSecondPriority] = useState(null);
    const [thirdPriority, setThirdPriority] = useState(null);
    const [fourthPriority, setFourthPriority] = useState(null);
    const [fifthPriority, setFifthPriority] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);
    const [isFocus4, setIsFocus4] = useState(false);
    const [isFocus5, setIsFocus5] = useState(false);
    const dropdownOptions = [
        { label: 'Cost', value: 'cost' },
        { label: 'Service Life', value: 'service_life' },
        { label: 'Embodied Carbon', value: 'embodied_carbon' },
        { label: 'Handling', value: 'handling' },
        { label: 'Maintenance', value: 'maintenance' },
        { label: 'Construction Waste Potential', value: 'waste_potential' },
        { label: 'Availability', value: 'availability' },
        { label: 'Thermal Performance', value: 'thermal_performance' },
    ];
    const selectedValues = useMemo(() => {
        return [firstPriority, secondPriority, thirdPriority, fourthPriority, fifthPriority].filter(v => v !== null);
    }, [firstPriority, secondPriority, thirdPriority, fourthPriority, fifthPriority]);
    const getAvailableOptions = (currentValue) => {
        return dropdownOptions.filter(option =>
            // Include the option if:
            // 1. It's not selected in any *other* dropdown OR
            // 2. It *is* the currently selected value for *this* dropdown
            !selectedValues.includes(option.value) || option.value === currentValue
        );
    };
    const optionsFor1 = useMemo(() => getAvailableOptions(firstPriority), [selectedValues, firstPriority]);
    const optionsFor2 = useMemo(() => getAvailableOptions(secondPriority), [selectedValues, secondPriority]);
    const optionsFor3 = useMemo(() => getAvailableOptions(thirdPriority), [selectedValues, thirdPriority]);
    const optionsFor4 = useMemo(() => getAvailableOptions(fourthPriority), [selectedValues, fourthPriority]);
    const optionsFor5 = useMemo(() => getAvailableOptions(fifthPriority), [selectedValues, fifthPriority]);
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />
            <PageHeader title='Create a New Report'/>
            {/* Wrap content in ScrollView */}
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {/* Priority One Group */}
                <View style={styles.priorityGroup}>
                    <Text style={styles.label}>Priority One</Text>
                    <Dropdown
                        // ... other props remain the same (style, placeholderStyle etc.)
                        style={[styles.dropdown, isFocus1 && styles.dropdownFocus]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={styles.itemTextStyle}
                        containerStyle={styles.dropdownContainer}
                        // --- Pass the filtered data ---
                        data={optionsFor1}
                        // ---
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus1 ? 'Select Priority One' : '...'}
                        value={firstPriority}
                        onFocus={() => setIsFocus1(true)}
                        onBlur={() => setIsFocus1(false)}
                        onChange={item => {
                            setFirstPriority(item.value);
                            setIsFocus1(false);
                            console.log("Priority 1 Selected:", item.label, "(Value:", item.value, ")");
                        }}
                    />
                </View>

                {/* Priority Two Group */}
                <View style={styles.priorityGroup}>
                    <Text style={styles.label}>Priority Two</Text>
                    <Dropdown
                        // ... other props
                        style={[styles.dropdown, isFocus2 && styles.dropdownFocus]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={styles.itemTextStyle}
                        containerStyle={styles.dropdownContainer}
                        // --- Pass the filtered data ---
                        data={optionsFor2}
                        // ---
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus2 ? 'Select Priority Two' : '...'}
                        value={secondPriority}
                        onFocus={() => setIsFocus2(true)}
                        onBlur={() => setIsFocus2(false)}
                        onChange={item => {
                            setSecondPriority(item.value);
                            setIsFocus2(false);
                            console.log("Priority 2 Selected:", item.label, "(Value:", item.value, ")");
                        }}
                    />
                </View>

                {/* Priority Three Group */}
                <View style={styles.priorityGroup}>
                    <Text style={styles.label}>Priority Three</Text>
                    <Dropdown
                        // ... other props
                        style={[styles.dropdown, isFocus3 && styles.dropdownFocus]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={styles.itemTextStyle}
                        containerStyle={styles.dropdownContainer}
                        // --- Pass the filtered data ---
                        data={optionsFor3}
                        // ---
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus3 ? 'Select Priority Three' : '...'}
                        value={thirdPriority}
                        onFocus={() => setIsFocus3(true)}
                        onBlur={() => setIsFocus3(false)}
                        onChange={item => {
                            setThirdPriority(item.value);
                            setIsFocus3(false);
                            console.log("Priority 3 Selected:", item.label, "(Value:", item.value, ")");
                        }}
                    />
                </View>

                 {/* Priority Four Group */}
                <View style={styles.priorityGroup}>
                    <Text style={styles.label}>Priority Four</Text>
                    <Dropdown
                        // ... other props
                        style={[styles.dropdown, isFocus4 && styles.dropdownFocus]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={styles.itemTextStyle}
                        containerStyle={styles.dropdownContainer}
                        // --- Pass the filtered data ---
                        data={optionsFor4}
                        // ---
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus4 ? 'Select Priority Four' : '...'}
                        value={fourthPriority}
                        onFocus={() => setIsFocus4(true)}
                        onBlur={() => setIsFocus4(false)}
                        onChange={item => {
                            setFourthPriority(item.value);
                            setIsFocus4(false);
                            console.log("Priority 4 Selected:", item.label, "(Value:", item.value, ")");
                        }}
                    />
                </View>

                 {/* Priority Five Group */}
                <View style={styles.priorityGroup}>
                    <Text style={styles.label}>Priority Five</Text>
                    <Dropdown
                        // ... other props
                        style={[styles.dropdown, isFocus5 && styles.dropdownFocus]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={styles.itemTextStyle}
                        containerStyle={styles.dropdownContainer}
                        // --- Pass the filtered data ---
                        data={optionsFor5}
                        // ---
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus5 ? 'Select Priority Five' : '...'}
                        value={fifthPriority}
                        onFocus={() => setIsFocus5(true)}
                        onBlur={() => setIsFocus5(false)}
                        onChange={item => {
                            setFifthPriority(item.value);
                            setIsFocus5(false);
                            console.log("Priority 5 Selected:", item.label, "(Value:", item.value, ")");
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={() => console.log("Generate Report pressed")}>
                    <Text style={styles.submitButtonText}>Generate Report</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f2f5', 
    },
    scrollViewContainer: {
        flexGrow: 1, 
        padding: 20, 
    },
    screenTitle: {
        fontSize: 26, 
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center', 
        marginBottom: 30,
    },
    priorityGroup: {
        marginBottom: 25, 
    },
    label: { 
        fontSize: 15, 
        color: '#555',
        marginBottom: 8, 
        fontWeight: '500',
    },
    dropdown: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1, 
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
    },
    dropdownFocus: {
        borderColor: '#007AFF',
        borderWidth: 1.5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#999',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#333',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    itemTextStyle: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 4,
    },
    dropdownContainer: {
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop: 2, // Small gap between dropdown box and the list
    },
    submitButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20, // Space above the button
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default GenerateReport;