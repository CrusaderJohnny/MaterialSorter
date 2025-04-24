import foundations from './foundations.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useRouter } from 'expo-router';

export default async function SortReport(pri1: any,pri2: any,pri3: any,pri4: any,pri5: any) {
    console.log(" - Generate Report pressed")
    console.log(" - Priority #1: ",pri1)
    console.log(" - Priority #2: ",pri2)
    console.log(" - Priority #3: ",pri3)
    console.log(" - Priority #4: ",pri4)
    console.log(" - Priority #5: ",pri5)

    interface Dictionary<T> {
        [key: string]: T
    }
      
    const isBetter: Dictionary<string> = {
        "cost": "low",
        "service_life": "high",
        "embodied_carbon": "low",
        "handling": "high",
        "maintenance": "low",
        "waste_potential": "low",
        "availability": "high",
        "thermal_performance": "high"
    }



    const sortByPriorities = (data: DataItem[], priorities: string[]): DataItem[] => {
        if (!priorities || priorities.length === 0) {
          return data; // return original data if no priorities are specified
        }
      
        return data.sort((a, b) => {
            // loop for each priority
            for (const priority of priorities) {
                // set values to compare using the priority as the key
                const valueA = a[priority as keyof DataItem];
                const valueB = b[priority as keyof DataItem];
                
                if (valueA !== valueB) { // If values are equal, move to the next priority
                
                if (typeof valueA === 'number' && typeof valueB === 'number') {
                    const better = isBetter[priority]; // get if higher or lower is better from dictionary
                    // sort accordingly
                    if (better === "low") {
                        return valueA - valueB; // sort low values first
                    } else if (better === "high") {
                        return valueB - valueA; // sort high values first
                    } else {
                        // default to low is better if not found in the dictionary
                        return valueA - valueB;
                    }
                } else {
                    // fallback if types are different
                    if (valueA > valueB) return 1;
                    if (valueA < valueB) return -1;
                }
                }

                
                
            }
            return 0; // if  all priorities are equal for these two items
        });
    };



    const userPriorities1: string[] = [pri1,pri2,pri3,pri4,pri5];
    const sortedData1 = sortByPriorities(foundations, userPriorities1);
    console.log(" - Sorted with priorities: ",userPriorities1, JSON.stringify(sortedData1, null, 2));


    const jsonData = JSON.stringify(sortedData1, null, 2);

    try {
        await AsyncStorage.setItem('sortedReport', jsonData);
        console.log(" - Sorted data saved to AsyncStorage with key 'sortedReport'");
        //router.push('/viewReportPage')
    } catch (error) {
        console.error(" - Error saving to AsyncStorage:", error);
    }

    

}

