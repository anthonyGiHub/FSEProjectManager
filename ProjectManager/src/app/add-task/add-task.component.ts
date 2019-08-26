import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import {ParentTask} from 'src/app/shared/parentTask.model';
import{ FormsModule, NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/shared/project.service';
import { Project } from '../shared/project.model';
import {ProjectManagerTasks} from 'src/app/shared/projectManagerTasks.model';
import {Tasks} from 'src/app/shared/tasks.model';
import { ProjectTasks } from '../shared/projectTasks.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  IsParentTaskChecked=false;
  IsUpdate = false;
  // service: ProjectService;
  // constructor(private _service :ProjectService) { 
    
 
  constructor(public service :ProjectService,private _route:ActivatedRoute ) { 
//this.service = _service;
//console.log("test service -----"+this.service.formData.Project_ID);
  }
 
  ngOnInit() {

   // if(this._route.snapshot.params == null || this._route.snapshot.params == undefined)
    if(this._route.snapshot.queryParams['id'])
    {
      
      this.IsUpdate = true;
    
      this.resetForm();
      this.PopulateProjectTasks(this._route.snapshot.params as ProjectTasks);
    
    }
    else
    {
      this.IsUpdate = false;
      this.service.refreshUserList();
      this.service.filteredUsers = this.service.listUser;
  
      this.service.refreshProjectList();
      this.service.filteredProjects = this.service.listProject;
  
      this.service.refreshParentTaskList();
      this.service.filteredParentTask = this.service.listParentTask;
  
  
       this.resetForm();

    }
    
    

  }

 
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    // this.service.formTask = {

    //   Task_ID:null,
    //   Parent_ID : null,
    //   Project_ID:null,
    //  Task1 :'',
    //  Start_Date:null,
    //  End_Date:null,
    //  Priority:null,
    //  Status:'',
    //  User_ID:null
    // }
    this.service.formTasks = {

      Task_ID:null,
      Parent_ID : null,
      Project_ID:null,
     Task1 :'',
     Start_Date:null,
     End_Date:null,
     Priority:null,
     Status:'',
     User_ID:null
    }

    this.service.formParentTask = {

      Parent_ID:null,
      Parent_Task :''
    }
    this.service.formProjectManagerTask = {

      Task_ID:null,
      Parent_ID : null,
      Project_ID:null,
     Task1 :'',
     Start_Date:null,
     End_Date:null,
     Priority:null,
     Status:'',
     User_ID:null
    }

  }

  changed(evt)
  {
    var isDate = document.getElementById("dates");
    var isPriority = document.getElementById("priority");
    //var isParentTask = document.getElementById("prntTasks");
    var isTask = document.getElementById("tasks");
    
    if(evt.srcElement.checked)
    {
      isDate.hidden = true;
      isPriority.hidden = true;
      isTask.hidden = true;
      this.IsParentTaskChecked = true;

    }
    else
    {
      isDate.hidden = false;
      isPriority.hidden = false;
      isTask.hidden = false;
      this.IsParentTaskChecked = false;
    }

   
    // if(isParentTask.checked)
    // {

    // }
  // //  this.IsActive = false;
  //   var dateNow = new Date();
  //  // dateNow:Date;

  //  var date1 = new Date(dateNow.getDate());

  //   this.service.formTask.Start_Date = dateNow;
  //   this.service.formTask.End_Date = dateNow;
  }
  SelectUser(user:User)
  {
  this.PopulateManager(user);
  }

  PopulateManager(user:User)
  { 
   this.service.formTasks.User_ID = user.User_ID; 
   var id = document.getElementById("tblManagerRole");
   id.hidden = true;
  }

  
  SelectProject(project:Project)
  {
  this.PopulateProject(project);
  }

  PopulateProject(project:Project)
  { 
   this.service.formTasks.Project_ID = project.Project_ID; 
   var id = document.getElementById("tblProject");
   id.hidden = true;
  }

  SelectParentTask(parentTask:ParentTask)
  {
  this.PopulateParentTask(parentTask);
  }

  PopulateParentTask(parentTask:ParentTask)
  { 
   this.service.formTasks.Parent_ID = parentTask.Parent_ID; 
   var id = document.getElementById("tblParentTask");
   id.hidden = true;
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
   // var isParentChk = document.getElementById("isParentCheck");
  //  var isParentChk = document.getElementById("parentTask");
  //  if( document.getElementById("parentTask").checked)
    if(this.IsParentTaskChecked)
    {
    //  var parentValue = form.value.searchParentTask;
    var parentValue = form.value.Task1;

      this.service.formParentTask.Parent_Task = parentValue;
      this.service.postParentTask(this.service.formParentTask).subscribe(res=>{
        this.resetForm(form)
       });
    }
    else
    {
      this.service.postTask(form.value).subscribe(res=>{
        this.resetForm(form)
       });
    }

    
  }

  
PopulateProjectTasks(projectTasks:ProjectTasks)
{
 
  //this._router.navigate(['/addTask',projectTasks]);
 this.service.PopulateTasks(projectTasks);
}

  
// PopulateProjectTasks()
// {
 
// }


  // onSubmit(form:NgForm)
  // {
  //   this.insertRecord(form);

  // }

  // insertRecord(form:NgForm)
  // {
  //   this.service.postTask(form.value).subscribe(res=>{
  //     this.resetForm(form)
  //   });

  // }

}
