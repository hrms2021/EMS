package com.employee.management.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.employee.management.model.EmpData;
import com.employee.management.model.Employee;
import com.employee.management.model.EmployeeLeaves;
import com.employee.management.model.UserDetails;
import com.employee.management.repository.EmpDataRepository;
import com.employee.management.repository.EmployeeLeavesRepository;
import com.employee.management.repository.EmployeeRepository;
import com.employee.management.repository.UserRepository;
import com.employee.management.vo.LeaveDetails;

// employee service class
@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private EmployeeLeavesRepository leaveRepo;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EmpDataRepository empDataRepo;
	// fetching all employees
	public List<Employee> getAllEmployees() {
		List<Employee> emps = employeeRepository.findAll();
		return emps;
	}

	// fetching employee by id
	public Employee getEmployee(int id) {
		return employeeRepository.findById(id).get();
	}

	// inserting employee
	public void addEmployee(Employee e) {
		Integer maxId = employeeRepository.findMaxId();
		if (maxId != null)
			e.setId(++maxId);
		else
			e.setId(1);
		e.setEmailId(e.getEmailId());
		employeeRepository.save(e);
		EmployeeLeaves leave = new EmployeeLeaves();
		leave.setId(maxId);
		leave.setTotalLeaves(e.getLeaves());
		leave.setLeaveCount(e.getLeaves());
		leaveRepo.save(leave);
		
		UserDetails user = new UserDetails();
		user.setEmailId(e.getEmailId());
		user.setRoleId(e.getRoleId());
		user.setPassword("password");
		user.setId(maxId);
		userRepository.save(user);
	}

	// updating employee by id
	public void updateEmployee(Employee emp, int id) {
		if (id == emp.getId()) {
			employeeRepository.save(emp);
		}
	}

	// deleting employee by id
	public void deleteEmployeeByID(int id) {
		employeeRepository.deleteById(id);
	}

	// patching/updating employee by id
	public void patchEmployee(Employee emp, int id) {
		if (id == emp.getId()) {
			employeeRepository.save(emp);
		}
	}

	public List<LeaveDetails> getLeaveDetailsByEmployeeId() {

		
		List<Employee> empList = getAllEmployees();
		List<LeaveDetails> leavesDetailsList = new ArrayList<>();
		for (Employee emp : empList) {
			LeaveDetails leaves = new LeaveDetails();
			leaves.setEmail(emp.getEmailId());
			leaves.setEmployeeName(emp.getFirstName() + " " + emp.getLastName());
			leaves.setEmployeeId(emp.getId());

			Optional<EmployeeLeaves> empLeave = leaveRepo.findById(emp.getId());
			if (empLeave.isPresent()) {
				leaves.setLeaveBalance(empLeave.get().getLeaveCount());
				leaves.setTotalLeave(empLeave.get().getTotalLeaves());
			}

			leavesDetailsList.add(leaves);
		}
		return leavesDetailsList;
	}

	public void uploadDocumentInDms(Integer empId, MultipartFile file) throws IOException {
		
		EmpData data = new EmpData();
		data.setEmpId(empId);
		data.setEmpFile(file.getBytes());
		data.setFileName(file.getOriginalFilename());
		empDataRepo.save(data);
		
	}
}
