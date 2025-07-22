//métodos utilizados:

//.map       itera/crea un <p> custom.
//.filter    itera/crea un <p> ya filtrado.
//.reduce    itera/return a number. (a*b es custom)
//.innerHTML reescribe en DOM. (no add NO)

const employees = [
    { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000  },
    { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000  },
    { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000  },
    { id: 4, name: "Tony Stark", age: 48, department: "IT", salary: 90000  },
];

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById("employeesDetails").innerHTML = totalEmployees;
};

function calculateTotalSalaries() {
    const TotalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Salario Total: $${TotalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department ==="HR");
    const hremployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join("");
    document.getElementById("employeesDetails").innerHTML = hremployeesDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee) {
        document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById("employeesDetails").innerHTML = "No se ha encontrado ningún empleado con este ID";
    }
}