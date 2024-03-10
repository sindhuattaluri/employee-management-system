
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

function calculateAverageSalary(employees) {
    if (employees.length === 0) {
        return 0;
    }

    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
}

function findEmployeesByDepartment(employees, department) {
    return employees.filter(employee => employee.department === department);
}

function increaseSalary(employees, percentageIncrease) {
    employees.forEach(employee => {
        const increaseAmount = (percentageIncrease / 100) * employee.salary;
        employee.salary += increaseAmount;
    });
}

function sortEmployeesByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
}

const employee1 = new Employee("koushik", 30, "IT", 50000);
const employee2 = new Employee("kumar", 25, "HR", 45000);
const employee3 = new Employee("prasad", 35, "Finance", 60000);

const employeesArray = [employee1, employee2, employee3];


const averageSalary = calculateAverageSalary(employeesArray);
console.log("Average Salary:", averageSalary);


const hrEmployees = findEmployeesByDepartment(employeesArray, "HR");
console.log("HR Employees:", hrEmployees);


increaseSalary(employeesArray, 10);
console.log("Employees after Salary Increase:", employeesArray);


const sortedEmployees = sortEmployeesByAge(employeesArray);
console.log("Employees Sorted by Age:", sortedEmployees);
