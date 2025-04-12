export interface PageHeaderProps {
    title: string;
};

export interface Report {
    id: number | string; // Assuming 'id' can be a number or a string
    title: string;
    createdAt?: string | Date; //used to sort currently, will refine with proper information later
    //we can add more attributes here later if we wish to have the report hold all information related to a generated report
    [key: string]: any; // Allows for additional properties not explicitly defined
}

export interface ReportItemProps {
    report: Report;
    onEdit: () => void; // Function that takes no arguments and returns void we can implement functionality later
    onViewFeedback: () => void; // Function that takes no arguments and returns void we can implement functionality later
};

export interface ReportListProps {
    reports: Report[];
}

export interface CustomTableProps {
    tableName: string;
    headers: string[];
    data: (string | number)[][]; // Array of rows, each row is an array of cell data
}