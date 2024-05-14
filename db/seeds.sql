INSERT INTO department (name)
VALUES ('coding'), ('Administrator'), ('Business');

INSERT INTO role_h (title, salary, department_id)
VALUES ('Computer Programmer', 80000, 1),
('Business Analyst', 70000, 3),
('Network Administrator', 100000, 2),
('Software Architect', 120000, 1),
('Web Developer', 90000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lee', 'gin', 1, NULL),
('george', 'newton', 2, NULL),
('thomas', 'jones', 3,2),
('frank', 'mitchel', 4, NULL),
('preston', 'hon', 5, NULL);











