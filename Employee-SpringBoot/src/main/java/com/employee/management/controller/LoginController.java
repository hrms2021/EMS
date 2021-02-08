package com.employee.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.model.UserDetails;
import com.employee.management.service.LoginService;
import com.employee.management.vo.UserRequest;

@RestController
@CrossOrigin("*")
public class LoginController {

	@Autowired
	private LoginService loginService;

	// authentication employee
	@PostMapping("/auth")
	public ResponseEntity<UserDetails> auth(@RequestBody UserRequest user) {
		UserDetails status = loginService.authenticateUser(user);
		if (status!=null)
			return new ResponseEntity<UserDetails>(status,HttpStatus.OK);
		else
			return new ResponseEntity<UserDetails>(HttpStatus.FORBIDDEN);
	}

}
