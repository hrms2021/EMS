package com.employee.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.model.EmployeeLeaves;

public interface EmployeeLeavesRepository extends JpaRepository<EmployeeLeaves, Integer>{

}
