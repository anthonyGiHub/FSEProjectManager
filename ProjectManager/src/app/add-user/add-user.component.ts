import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import{ FormsModule, NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public service :ProjectService) { }

  ngOnInit() {
   // this.resetForm();

  }
  // resetForm(form?:NgForm)
  // {
  //   if(form!=null)
  //   form.resetForm();
  //   this.service.formUser = {

  //     User_ID:null,
  //     FirstName : '',
  //     LastName:'',
  //     Employee_ID:null  
  //   }
  // }

  
  onSubmit(form:NgForm)
  {
   // debugger;
    console.log("onsubmitcall");
    this.insertRecord(form);

  }

  insertRecord(form:NgForm)
  {
    this.service.postUser(form.value).subscribe(res=>{
    //  this.resetForm(form)
   });
  }

  onSearch(form:NgForm)
  {

   // debugger;
    console.log("onSearchcall");
    this.service.getUsers();
  }


}
