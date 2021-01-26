import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { this.leave = new ApplyLeave(); }
  leave: ApplyLeave;
  ngOnInit() {
  }

  leavesForm = new FormGroup({
    typeOfLeave: new FormControl('', Validators.required),
    'id': new FormControl('', Validators.required),
    noOfDays: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required)
  });

  applyLeaves() {
    this.leavesForm.get('id').setValue(localStorage.getItem('id'));
    this.employeeService.applyLeave(this.leavesForm.value).subscribe(data => {
      console.log(data);
      this.toastr.success("Success !")
      this.leavesForm.reset();
    },
      error => {
        console.log(error);
        this.toastr.error('Failure !')
      });
  }



}

export class ApplyLeave {
  id: number;
  noOfDays: number;
  reason: String
}

