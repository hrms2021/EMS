package com.employee.management.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.model.UserDetails;
import com.employee.management.repository.UserRepository;
import com.employee.management.vo.UserRequest;

@Service
public class LoginService {

	@Autowired
	private UserRepository userRepository;

	public UserDetails authenticateUser(UserRequest user) {

		Optional<UserDetails> userResponse = userRepository.findById(user.getEmail());
		if (userResponse.isPresent()) {
			UserDetails usrObj = userResponse.get();
			if (user.getPassword().equals(usrObj.getPassword()) && user.getUserType().equals(usrObj.getRoleId())) {
				usrObj.setPassword(null);
				return usrObj;
			}
			return null;
		} else
			return null;
	}
}
