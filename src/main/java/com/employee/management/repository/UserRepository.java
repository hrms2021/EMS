package com.employee.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.management.model.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails, String>{

}
