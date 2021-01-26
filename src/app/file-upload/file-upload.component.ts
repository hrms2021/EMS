import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private toaster:ToastrService) { }

  uploadDocForm:FormGroup;

  ngOnInit() {
    
    this.uploadDocForm = new FormGroup({
      uploadDoc: new FormControl('')


    })
  }

  addedFiles = [];
  filesObj = [];
  choosefile;
  fileName;

  uploadedImage() {
    console.log("upload clicked")
  }

  onFileChange(fileInputEvent) {
    this.addedFiles = [];
    this.filesObj = [];
    console.log('fileInputEvent', fileInputEvent)
    this.addedFiles.push(fileInputEvent.target.files[0].name); // replacement for addFile.
    this.filesObj.push(fileInputEvent.target.files[0]);
    var file = new Blob([fileInputEvent.target.files[0]], { type: 'image/jpg' });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event: any) => {

      // this.trademarkSoundSourceList.push(event.target.result);

    }

  }

  // uploadDoc() {
  //   this.employeeService.uploadDoc(this.filesObj).then((resp: any) => {
  //     if (resp.status == 200) {
  //       if (resp['body']['responseCode'] == 200) {
  //         // this.applicationId = resp['body']['responseObject'].applicationId;
  //         this.addedFiles = [];
  //         this.filesObj = [];
  //         }
  //       } else {
  //       }
  //     }
  //   , (error) =>{
  //   })
  // }

  uploadDoc() {
    let empId = localStorage.getItem("id");
    this.employeeService.uploadDoc1(empId,this.filesObj).then((resp: any) => {
      if (resp) {
       
          this.toaster.success('Successful !');
         
      } else {
        this.toaster.error('Something went wrong');
      }
    }).catch((err: any) => {
      this.toaster.error('Something went wrong');
    })

  }

}
  
