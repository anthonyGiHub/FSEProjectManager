import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { ProjectTasks } from '../shared/projectTasks.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(public service :ProjectService,private _router:Router) { }

  ngOnInit() {
    this.service.refreshProjectTaskList();
    this.service.filteredProjectTasks = this.service.listProjectTasks;
  }

//   btnClick= function () {

//   //  this.router.navigateByUrl('/addTask');
//   this.router.navigateByUrl('')
// };

PopulateTasks(projectTasks:ProjectTasks)
{
  this._router.navigate(['/addTask',projectTasks]);
//this.service.PopulateUsers(user);
}


PopulateEndTasks(projectTasks:ProjectTasks)
{
  projectTasks.Status = 'Yes';
  this._router.navigate(['/addTask',projectTasks]);
//this.service.PopulateUsers(user);
}

sortProjectTasks(value:string)
{
  if(value == "StartDate")
  {
   this.service.sortByStartDate();
  }
  if(value == "EndDate")
  {
   this.service.sortByEndDate();
  }
  if(value == "Priority")
  {
   this.service.sortByPriority();
  }

  if(value == "Completed")
  {
   this.service.sortByCompleted();
  }
 
  this.service.filteredProjectTasks = this.service.listProjectTasks;
}


}

