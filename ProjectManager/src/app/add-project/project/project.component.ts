import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import{ FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { ThrowStmt } from '@angular/compiler';
import { $ } from 'protractor';
import { timingSafeEqual } from 'crypto';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  IsActive=false;
  constructor(public service :ProjectService) { }

  ngOnInit() {
    this.service.refreshUserList();
    this.service.filteredUsers = this.service.listUser;

    // this.service.refreshProjectList();
    // this.service.filteredProjects = this.service.listProject;

    // this.service.refreshParentTaskList();
    // this.service.filteredParentTask = this.service.listParentTask;
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formProject = {

      Project_ID:null,
     StartDate : null,
      EndDate:null,
      Priority:null,
      User_ID:null,
      Project1:''
      
    }
    
  }

  SelectUser(user:User)
  {
  this.PopulateManager(user);
  }

  PopulateManager(user:User)
  { 
   this.service.formProject.User_ID = user.User_ID; 
   var id = document.getElementById("tblManagerRole");
   id.hidden = true;
  //  $('tblManagerRole').hide();
  }
  changed(evt)
  {
  //  this.IsActive = false;
    var dateNow = new Date();
   // dateNow:Date;

   var date1 = new Date(dateNow.getDate());

    this.service.formProject.StartDate = dateNow;
    this.service.formProject.EndDate = dateNow;
  }
  onSubmit(form:NgForm)
  {
    //if(form.value.Project_ID == null)
    this.insertRecord(form);
    // else
    // this.updateRecord(form);
  }
  insertRecord(form:NgForm)
  {
//     if(this.IsActive)
//     {
// //       var date = new Date();   
// // this.form.value.StartDate = date.getDate();

//     }
    this.service.postProject(form.value).subscribe(res=>{
    this.resetForm(form)
   });
  }

  updateRecord(form:NgForm)
  {
    this.service.putUser(form.value).subscribe(res=>{
    this.resetForm(form)
   });
  }
  // compute(num:number)
  // {
  //   if(num<0)
  //   return 0;
  //   else
  //   return num + 1;
  
  // }


}
