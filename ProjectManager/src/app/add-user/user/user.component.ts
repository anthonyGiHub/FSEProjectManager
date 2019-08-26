import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import{ FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service :ProjectService) { }

  ngOnInit() {
     this.resetForm();
  }
   resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formUser = {

      User_ID:null,
      FirstName : '',
      LastName:'',
      Employee_ID:null  
    }
  }
  onSubmit(form:NgForm)
  {
    if(form.value.User_ID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);

    console.log("onsubmitcall");
    

  }

  insertRecord(form:NgForm)
  {
    this.service.postUser(form.value).subscribe(res=>{
    this.resetForm(form)
   });
  }

  updateRecord(form:NgForm)
  {
    this.service.putUser(form.value).subscribe(res=>{
    this.resetForm(form)
   });
  }





}
