package com.employee.management.vo;

public class UserRequest {

	private String email;
	private Integer userType;
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getUserType() {
		return userType;
	}

	public void setUserType(Integer userType) {
		this.userType = userType;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UserRequest(String emailId, Integer userType, String password) {
		super();
		this.email = emailId;
		this.userType = userType;
		this.password = password;
	}

	public UserRequest() {
		super();
	}

	@Override
	public String toString() {
		return "UserRequest [emailId=" + email + ", userType=" + userType + ", password=" + password + "]";
	}

}
