import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  employee: Employee;
  
  //constructor(
  //  private employeeService: EmployeeService) { }

    constructor(private route: ActivatedRoute,private router: Router,
      private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = Number(localStorage.getItem("id"));
    this.employeeService.getEmployee(this.id).subscribe(resp=>{
      this.employee=resp;
      console.log(this.employee);
    })

  }
  list(){
    this.router.navigate(['employees']);
  }

}
