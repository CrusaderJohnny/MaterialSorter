import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import PageHeader from './pageComponents/pageHeader';
import ReportList from './reportComponents/reportList';

const FavouriteReports = () => {
    // Example array of reports
    const reportsData = [
        { id: 1, title: 'Monthly Sales Report - March', createdAt: '2025-03-31' },
        { id: 2, title: 'Weekly Performance Review - Week 15', createdAt: '2025-04-11' },
        { id: 3, title: 'Quarterly Expenses Report - Q1', createdAt: '2025-03-31' },
        { id: 4, title: 'Daily Activity Log - April 12', createdAt: '2025-04-12' },
        { id: 5, title: 'Project Status Update - Alpha', createdAt: '2025-04-05' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#3498db" />
            <PageHeader title='Favourite Reports' />
            <ReportList reports={reportsData} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f4f4', // Light background color for the page
    },
});

export default FavouriteReports;