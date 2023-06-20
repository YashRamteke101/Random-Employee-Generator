// Employee class
class Employee {
  constructor(id, firstName, lastName, email, companyName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.companyName = companyName;
  }
}

//  generate random employee IDs
function generateEmployeeId() {
  return Math.floor(Math.random() * 1000) + 1;
}

//  generate random employee name
function generateEmployeeName() {
  return faker.name.firstName();
}

//  generate random last name
function generateEmployeeLastName() {
  return faker.name.lastName();
}

//  generate email address
function generateEmployeeEmail(firstName, lastName, companyName) {
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${companyName.toLowerCase()}.com`;
  return email;
}

//  handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const companyNameInput = document.getElementById('companyName');
  const numEmployeesInput = document.getElementById('numEmployees');

  const companyName = companyNameInput.value;
  const numEmployees = parseInt(numEmployeesInput.value);

  if (companyName && numEmployees && numEmployees > 0) {
    const employees = [];

    for (let i = 0; i < numEmployees; i++) {
      const firstName = generateEmployeeName();
      const lastName = generateEmployeeLastName();
      const email = generateEmployeeEmail(firstName, lastName, companyName);
      const id = generateEmployeeId();

      const employee = new Employee(id, firstName, lastName, email, companyName);

      employees.push(employee);
    }

    displayEmployees(employees);
  }
}

//  display employee details
function displayEmployees(employees) {
  const displayDiv = document.getElementById('employeeDisplay');
  displayDiv.innerHTML = '';

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const employeeInfo = document.createElement('p');

    employeeInfo.innerHTML = `ID: ${employee.id}, Name: ${employee.firstName} ${employee.lastName}, Email: ${employee.email}, Company: ${employee.companyName}`;

    displayDiv.appendChild(employeeInfo);
  }
}

//  form submission event listener
const form = document.getElementById('employeeForm');
form.addEventListener('submit', handleSubmit);
