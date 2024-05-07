SELECT * 
FROM role_h
JOIN department ON role_h.department_id
= department.id;

SELECT *
FROM employee
JOIN role_h ON employee.role_id
= role_h.id

