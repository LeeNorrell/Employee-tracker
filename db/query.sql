SELECT department.name
AS department, role_h.department_id FROM role_h
LEFT JOIN department
ON role_h.department_id =
department.id
ORDER BY department.name;


SELECT role_h.department_id
AS role_h, employee.manager_id
FROM employee
LEFT JOIN role_h
ON employee.manager_id =
role_h.id
ORDER BY role_h.department_id;

