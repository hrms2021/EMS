package com.employee.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.employee.management.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

	@Query("select max(e.id) from Employee e")
	Integer findMaxId();
	
}
