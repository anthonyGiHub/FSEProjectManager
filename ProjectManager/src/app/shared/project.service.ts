import { Injectable } from '@angular/core';
import {FormControl,FormGroup, NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from './employee.model';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { Project } from './project.model';
import { ParentTask } from './parentTask.model';
import { ProjectManagerTasks } from './projectManagerTasks.model';
import { Tasks } from './tasks.model';
import { ProjectTasks } from './projectTasks.model';

// import {HttpModule} from '@angular/http';
// import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService
 {

//Task


listParentTask:ParentTask[];
filteredParentTask:ParentTask[];

private _searchParentTask:string;
get searchParentTask():string{

 return this._searchParentTask;
}
set searchParentTask(value:string){
  this._searchParentTask = value;
  this.filteredParentTask = this.filterParentTask(value)
}
filterParentTask(searchString:string)
{
 return this.listParentTask.filter(usr=>
   usr.Parent_Task.toLowerCase().indexOf(searchString.toLowerCase())!=-1)
}

 listProject:Project[];
 filteredProjects:Project[];

 private _searchProject:string;
 get searchProject():string{

  return this._searchProject;
 }
 set searchProject(value:string){
   this._searchProject = value;
   this.filteredProjects = this.filterProjects(value)
 }
 filterProjects(searchString:string)
 {
  return this.listProject.filter(usr=>
    usr.Project1.toLowerCase().indexOf(searchString.toLowerCase())!=-1)
 }


 listProjectTasks:ProjectTasks[];
 filteredProjectTasks:ProjectTasks[];

 private _searchProjectTasks:string;
 get searchProjectTasks():string{

  return this._searchProjectTasks;
 }
 set searchProjectTasks(value:string){
   this._searchProjectTasks = value;
   this.filteredProjectTasks = this.filterProjectsTasks(value)
 }
 filterProjectsTasks(searchString:string)
 {
  return this.listProjectTasks.filter(usr=>
    usr.Project.toLowerCase().indexOf(searchString.toLowerCase())!=-1)
 }

 sortByStartDate()
 {
  var sortedArray: ProjectTasks[] = this.listProjectTasks.sort((obj1, obj2) => {
   
    return new Date(obj1.Start_Date).getTime() - new Date(obj2.Start_Date).getTime()

});
 }

 sortByEndDate()
 {
  var sortedArray: ProjectTasks[] = this.listProjectTasks.sort((obj1, obj2) => {
    return new Date(obj1.End_Date).getTime() - new Date(obj2.End_Date).getTime()
});
 }

 sortByPriority()
 {
  var sortedArray: ProjectTasks[] = this.listProjectTasks.sort(function(obj1, obj2) {
    return obj1.Priority - obj2.Priority
});
 }
 sortByCompleted()
 {
  var sortedArray: ProjectTasks[] = this.listProjectTasks.sort(function(obj1, obj2) {
    if (obj1.Status > obj2.Status) {
      return 1;
  }

  if (obj1.Status < obj2.Status) {
      return -1;
  }
  return 0;
});
 }



 
//Users
listUser:User[];
filteredUsers:User[];

 private _searchTerm:string;
 get searchTerm():string{

  return this._searchTerm;
 }
 set searchTerm(value:string){
   this._searchTerm = value;
   this.filteredUsers = this.filterUsers(value)
 }
 filterUsers(searchString:string)
 {
  return this.listUser.filter(usr=>
    usr.FirstName.toLowerCase().indexOf(searchString.toLowerCase())!=-1)
 }

 sortUsersByFirstName()
 {
  var sortedArray: User[] = this.listUser.sort((obj1, obj2) => {
    if (obj1.FirstName > obj2.FirstName) {
        return 1;
    }

    if (obj1.FirstName < obj2.FirstName) {
        return -1;
    }

    return 0;
});
 }

 sortUsersByLastName()
 {
  var sortedArray: User[] = this.listUser.sort((obj1, obj2) => {
    if (obj1.LastName > obj2.LastName) {
        return 1;
    }

    if (obj1.LastName < obj2.LastName) {
        return -1;
    }

    return 0;
});
 }

 sortUsersByEmployeeId()
 {
  var sortedArray: User[] = this.listUser.sort(function(obj1, obj2) {
    return obj1.Employee_ID - obj2.Employee_ID
});
 }

 PopulateUsers(user:User)
 {
  this.formUser = user;
 }
 PopulateTasks(projectTasks:ProjectTasks)
{
  if(this.formTasks === undefined){
    this.formTasks = new Tasks();
  }
  this.formTasks.Task_ID = projectTasks.Task_ID;
  this.formTasks.Task1 = projectTasks.Task1;
  this.formTasks.Start_Date = projectTasks.Start_Date;
  this.formTasks.End_Date = projectTasks.End_Date;
  this.formTasks.Priority = projectTasks.Priority;
  this.formTasks.User_ID = projectTasks.User_ID;
  this.formTasks.Project_ID = projectTasks.Project_ID;
  this.formTasks.Parent_ID = projectTasks.Parent_ID;
  this.formTasks.Status = projectTasks.Status;
  
}

PopulateProjects(projectTasks:ProjectTasks)
{
  if(this.formProject === undefined){
    this.formProject = new Project();
  }
  this.formProject.Project1 = projectTasks.Project;
  this.formProject.Project_ID = projectTasks.Project_ID;
  this.formProject.StartDate = projectTasks.Start_Date;
  this.formProject.EndDate = projectTasks.End_Date;
  this.formProject.Priority = projectTasks.Priority;
  this.formProject.User_ID = projectTasks.User_ID;

}
//Users
//Service datas
formUser:User;
formProject:Project;
// formTask:Task;
formTasks:Tasks;
formParentTask:ParentTask;
formProjectManagerTask:ProjectManagerTasks;
formProjectTasks : ProjectTasks;
constructor(private http : HttpClient) { }

postUser(user:User)
{
 // debugger;
  return this.http.post("http://localhost/ProjectManager.API/api" + '/User',user,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });

}

putUser(user:User)
{
 // debugger;
  return this.http.put("http://localhost/ProjectManager.API/api" + '/User/'+user.User_ID,user,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });

}

// DeleteUsers(user:User)
// {
//   return this.http.put("http://localhost/ProjectManager.API/api" + '/User/'+user.User_ID,user,{
//     headers:new HttpHeaders({
//       'Content-Type':'application/json'
//     })
//   });
//   //debugger;
//   // return this.http.put("http://localhost/ProjectManager.API/api" + '/User/'+userId,{
//   //   headers:new HttpHeaders({
//   //     'Content-Type':'application/json'
//   //   })
//   // });
// }
// DeleteUsers(user:User)
// {
//   //debugger;
//   return this.http.delete("http://localhost/ProjectManager.API/api" + '/User/'+user.User_ID,{
//     headers:new HttpHeaders({
//       'Content-Type':'application/json'
//     })
//   });
// }



  DeleteUsers(userId:number)
{
  debugger;
  return this.http.delete("http://localhost/ProjectManager.API/api" + '/User/'+userId,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });

}

getUsers()
{
 // debugger;
 return this.http.get("http://localhost/ProjectManager.API/api" + '/User')
 .toPromise().then(res=>this.listUser = res as User[]);
}

refreshUserList()
{
//debugger;
  return this.http.get("http://localhost/ProjectManager.API/api" + '/User')
  .toPromise().then(res=>this.listUser = res as User[]);
}

//Projects

postProject(project:Project)
{
  var id = this.formProject.User_ID;
 // debugger;
  return this.http.post("http://localhost/ProjectManager.API/api" + '/Project',project,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });

}
//end

refreshProjectList()
{
//debugger;
  return this.http.get("http://localhost/ProjectManager.API/api" + '/Project')
  .toPromise().then(resProj=>this.listProject = resProj as Project[]);
}



refreshParentTaskList()
{
//debugger;
  return this.http.get("http://localhost/ProjectManager.API/api" + '/ParentTask')
  .toPromise().then(res=>this.listParentTask = res as ParentTask[]);
}

ng
postParentTask(parentTask:ParentTask)
{
 // debugger;
  return this.http.post("http://localhost/ProjectManager.API/api" + '/ParentTask',parentTask,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });

}



postTask(task:Tasks)
{
 // debugger;
  return this.http.post("http://localhost/ProjectManager.API/api" + '/Tasks',task,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });

}


refreshProjectTaskList()
{
//debugger;
  return this.http.get("http://localhost/ProjectManager.API/api" + '/Tasks')
  .toPromise().then(res=>this.listProjectTasks = res as ProjectTasks[]);
}


// cities = ['chenani','bangalore']
// getCities()
// {
// return this.cities;
// }


}
