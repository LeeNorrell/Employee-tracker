const inquirer = require("inquirer");
const { Pool } = require("pg");

// Connect to database
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: "postgres",
    // Enter PostgreSQL password
    password: "LMT",
    host: "localhost",
    database: "employees_db",
  },
  console.log("Connected to the employees_db database!")
);

pool.connect();

const menu = function () {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to view?",
        name: "selection",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "quit",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.selection === "view all departments") {
        view_departments();
      } else if (answers.selection === "view all roles") {
        view_roles()
      } else if (answers.selection === "view all employees") {
        view_employees()
      } else if (answers.selection === "add a department") {
      } else if (answers.selection === "add a role") {
      } else if (answers.selection === "add an employee") {
      } else if (answers.selection === "update an employee role") {
      } else {
      }
    });
};

menu();

const view_departments = function () {
  pool.query("SELECT * FROM department", (err, { rows }) => {
    console.table(rows);
    menu();
  });
};

const view_roles = function () {
  // role title, role id, department name, role salary
  pool.query(
    "SELECT role_h.title, role_h.id, department.name, role_h.salary FROM role_h LEFT JOIN department ON role_h.department_id = department.id",
    (err, { rows }) => {
      console.table(rows);
      menu();
    }
  );
};

const view_employees = function () {

  // WHEN I choose to view all employees
  // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  pool.query(
    "SELECT employee.id, employee.first_name, employee.last_name, role_h.title, department.name, role_h.salary, CONCAT(manager.first_name,' ',manager.last_name) AS MANAGER  FROM employee LEFT JOIN role_h ON employee.role_id = role_h.id LEFT JOIN department ON role_h.department_id = department.id LEFT JOIN employee AS manager ON   manager.id = employee.manager_id ",
    (err, { rows }) => {
      console.table(rows);
      menu();
    }
  );
};


const add_department = function () {
inquirer.prompt([
  {
    type: 'input',
    message: 'Enter the name of the department you would like to add.',
    name: 'department_name'
  }
]).then((answer)=> {

  pool.query(
    "INSERT INTO department (name) VALUES  ($1)", [answer.department_name], 
    (err, { rows }) => {
      menu();
    }
  );
})
 
};

