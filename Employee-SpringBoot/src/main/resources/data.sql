DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS employee_role;
DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee_leaves;

create sequence group_seq;

CREATE TABLE  employee(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  age INT NOT NULL,
  salary INT NOT NULL,
  email_id VARCHAR(250),
  department_id INT DEFAULT NULL,
  role_id INT DEFAULT NOT NULL
);

CREATE TABLE employee_role(
	id INT AUTO_INCREMENT PRIMARY KEY,
	description VARCHAR(250) NOT NULL
);

CREATE TABLE employee_leaves(
	id INT AUTO_INCREMENT PRIMARY KEY,
	leave_count INT(10) NOT NULL,
	total_leaves INT(10) NOT NULL
);

insert into employee_leaves values (1,20,35);
insert into employee_leaves values(2,30,35);
insert into employee_leaves values(3,3,35);

CREATE TABLE user_details(
	email_id VARCHAR(50) PRIMARY KEY,
	password VARCHAR(50) NOT NULL,
	role_id INT DEFAULT NOT NULL,
	id INT DEFAULT NOT NULL
);



CREATE TABLE department (
  department_id INT AUTO_INCREMENT  PRIMARY KEY,
  short_Name VARCHAR(250) NOT NULL,
  department_Name VARCHAR(250) NOT NULL
);

INSERT INTO employee (first_name, last_name,email_id, age,salary, department_id,role_id) VALUES
  ('admin', 'Kumar','admin@app.com',22,22000,1,1),
  ('user1', 'Kumar','rames@app.com',27,45000,2,1),
  ('megha', 'rani', 'megha@app.com',35,35000,3,2);
  
INSERT INTO user_details (email_id, password,role_id,id) VALUES
  ('admin@app.com', 'password',1,1),
  ('rames@app.com', 'password',1,2),
  ('megha@app.com','password',2,3);
  
 
  
  INSERT INTO department (short_Name,department_Name) VALUES
  ('ECE', 'electricals'),
  ('CVL', 'Civil Engineering'),
  ('PHY', 'physics');