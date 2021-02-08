package com.employee.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.model.EmpData;

public interface EmpDataRepository extends JpaRepository<EmpData, Integer>{

}
