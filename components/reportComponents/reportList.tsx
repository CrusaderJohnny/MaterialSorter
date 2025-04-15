import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ReportListProps } from "../../types/interfaceTypes";
import ReportItem from "./reportItem";
import { useRouter } from 'expo-router';

const ReportList: React.FC<ReportListProps> = ({ reports }) => {
    // Sort reports in descending order (assuming each report has a unique identifier like 'id' or 'createdAt')
    const sortedReports = [...reports].sort((a, b) => {
        // Replace 'createdAt' with your actual date/time field
        const dateA = a.createdAt || a.id; // Fallback to id if no date
        const dateB = b.createdAt || b.id;
        if (typeof dateA === 'string' && typeof dateB === 'string') {
            return dateB.localeCompare(dateA); // For string dates
        } else if (dateA instanceof Date && dateB instanceof Date) {
            return dateB.getTime() - dateA.getTime(); // For Date objects
        } else {
            return 0; // Handle cases where date format is inconsistent
        }
    });

    const router = useRouter();

    const handleEditReport = (report) => {
        console.log('Edit report:', report.title);
        // Implement your edit functionality here
        router.push("/genReportPage")
    };

    const handleViewFeedback = (report) => {
        console.log('View feedback for:', report.title);
        // Implement your view feedback functionality here
        router.push("/viewReportPage")
    };

    return (
        <FlatList
            data={sortedReports}
            keyExtractor={(report) => report.id ? report.id.toString() : Math.random().toString()} // Ensure each item has a unique key
            renderItem={({ item }) => (
                <ReportItem
                    report={item}
                    onEdit={() => handleEditReport(item)}
                    onViewFeedback={() => handleViewFeedback(item)}
                />
            )}
            contentContainerStyle={reportListStyles.listContainer}
        />
    );
};

const reportListStyles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
});

export default ReportList;