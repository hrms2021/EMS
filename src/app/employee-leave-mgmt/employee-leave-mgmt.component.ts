import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-leave-mgmt',
  templateUrl: './employee-leave-mgmt.component.html',
  styleUrls: ['./employee-leave-mgmt.component.css']
})
export class EmployeeLeaveMgmtComponent implements OnInit {

  constructor(private employeeServicee :EmployeeService) { }

  ngOnInit() {
    this.getLeaves();
  }

  employeeLeaves;
  getLeaves(){
    return this.employeeServicee.getLeaveDetails().subscribe(response=>{
      console.log(response)
      this.employeeLeaves=response})
  }
}
