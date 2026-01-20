/*

  Use . when you know the key name
  Use [] when the key is dynamic or unknown

  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const total = {};
  
  // First loop: Calculate totals

  /* USING FOREACH method.

  transactions.forEach(function(transaction) {
    const category = transaction.category;
    const price = transaction.price;
  }
    
  */

  for(let i = 0; i < transactions.length; i++){
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    if(total[category]){
      total[category] += price;
    }
    else{
      total[category] = price;
    }
  }
  
  // Second loop: Create result array
  const result = [];
  for(let category in total){  // Changed 'items' to 'category'
    result.push({
      category: category,        // Now using correct variable
      totalSpent: total[category]
    });
  }
  
  return result;

  /**
 * Implement a function `calculateHoursByDepartment` which takes a list of work logs as parameter
 * and returns a list of objects where each object represents a unique department and contains
 * the total hours worked and total number of employees who worked in that department.
 * 
 * workLogs is an array where each WorkLog is an object like:
 * {
 *   logId: 501,
 *   employeeName: 'Alice Johnson',
 *   department: 'Engineering',
 *   hoursWorked: 8,
 *   date: '2024-12-01',
 *   projectName: 'Website Redesign'
 * }
 * 
 * Output should be an array like:
 * [
 *   { 
 *     department: 'Engineering', 
 *     totalHours: 8, 
 *     employeeCount: 1 
 *   }
 * ]
 * 
 * Example:
 * Input:
 * [
 *   { logId: 501, employeeName: 'Alice', department: 'Engineering', hoursWorked: 8 },
 *   { logId: 502, employeeName: 'Bob', department: 'Engineering', hoursWorked: 6 },
 *   { logId: 503, employeeName: 'Charlie', department: 'Marketing', hoursWorked: 7 },
 *   { logId: 504, employeeName: 'Alice', department: 'Engineering', hoursWorked: 5 }
 * ]
 * 
 * Output:
 * [
 *   { department: 'Engineering', totalHours: 19, employeeCount: 3 },
 *   { department: 'Marketing', totalHours: 7, employeeCount: 1 }
 * ]
 * 
 * Note: Count each work log entry as one employee occurrence. If Alice appears twice,
 * count her twice in employeeCount (since she worked multiple shifts/days).
 */

function calculateHoursByDepartment(workLogs) {
  let departmentMap = {};

  for (let i = 0; i < workLogs.length; i++) {

    let currentLog = workLogs[i];
    let department = currentLog.department;
    let hoursWorked = currentLog.hoursWorked;

    // If department does not exist, create it
    if (!departmentMap[department]) {
      departmentMap[department] = { // storing the object as key value pair.
        department: department,
        totalHours: 0,
        employeeCount: 0
      };
    }

    // Add hours
    departmentMap[department].totalHours =
      departmentMap[department].totalHours + hoursWorked;

    // Increase employee count
    departmentMap[department].employeeCount =
      departmentMap[department].employeeCount + 1;
  }

  // Convert object to array
  let result = [];
  for (let key in departmentMap) {
    result.push(departmentMap[key]);
  }

  return result;
}


  // INTERVIEW FRIENDLY METHOD.
  function calculateHoursByDepartment(workLogs) {
  const departmentMap = {};

  workLogs.forEach(({ department, hoursWorked }) => {
    if (!departmentMap[department]) {
      departmentMap[department] = {
        department,
        totalHours: 0,
        employeeCount: 0
      };
    }

    departmentMap[department].totalHours += hoursWorked;
    departmentMap[department].employeeCount++;
  });

  return Object.values(departmentMap);
}

}

module.exports = calculateTotalSpentByCategory;
