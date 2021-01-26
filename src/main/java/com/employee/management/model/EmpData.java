package com.employee.management.model;

import java.io.InputStream;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "emp_data")
public class EmpData {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Lob
	private byte[] empFile;

	private Integer empId;

	private String fileName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public byte[] getEmpFile() {
		return empFile;
	}

	public void setEmpFile(byte[] empFile) {
		this.empFile = empFile;
	}

	public Integer getEmpId() {
		return empId;
	}

	public void setEmpId(Integer empId) {
		this.empId = empId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	@Override
	public String toString() {
		return "EmpData [id=" + id + ", empFile=" + empFile + ", empId=" + empId + ", fileName=" + fileName + "]";
	}

	

}
