package com.employee.management.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee_leaves")
public class EmployeeLeaves {

	@Id
	private Integer id;

	private Integer leaveCount;
	
	private Integer totalLeaves;

	public EmployeeLeaves(Integer id, Integer leaveCount, Integer totalLeaves) {
		super();
		this.id = id;
		this.leaveCount = leaveCount;
		this.totalLeaves = totalLeaves;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getLeaveCount() {
		return leaveCount;
	}

	public void setLeaveCount(Integer leaveCount) {
		this.leaveCount = leaveCount;
	}

	public Integer getTotalLeaves() {
		return totalLeaves;
	}

	public void setTotalLeaves(Integer totalLeaves) {
		this.totalLeaves = totalLeaves;
	}

	public EmployeeLeaves() {
		super();
	}

	@Override
	public String toString() {
		return "EmployeeLeaves [id=" + id + ", leaveCount=" + leaveCount + ", totalLeaves=" + totalLeaves + "]";
	}
	
	
}
