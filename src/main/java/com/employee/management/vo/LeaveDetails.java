package com.employee.management.vo;

public class LeaveDetails {

	
	private Integer employeeId;
	private String employeeName;
	private String email;
	private Integer leaveBalance;
	private Integer totalLeave;
	public LeaveDetails(Integer employeeId, String employeeName, String email, Integer leaveBalance,
			Integer totalLeave) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.email = email;
		this.leaveBalance = leaveBalance;
		this.totalLeave = totalLeave;
	}
	public Integer getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(Integer employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getLeaveBalance() {
		return leaveBalance;
	}
	public void setLeaveBalance(Integer leaveBalance) {
		this.leaveBalance = leaveBalance;
	}
	public Integer getTotalLeave() {
		return totalLeave;
	}
	public void setTotalLeave(Integer totalLeave) {
		this.totalLeave = totalLeave;
	}
	public LeaveDetails() {
		super();
	}
	@Override
	public String toString() {
		return "LeaveDetails [employeeId=" + employeeId + ", employeeName=" + employeeName + ", email=" + email
				+ ", leaveBalance=" + leaveBalance + ", totalLeave=" + totalLeave + "]";
	}
	
	
	
}
