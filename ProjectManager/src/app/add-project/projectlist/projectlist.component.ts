import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { ProjectTasks } from 'src/app/shared/projectTasks.model';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(public service :ProjectService) { }

  ngOnInit() {
    this.service.refreshProjectTaskList();
    this.service.filteredProjectTasks = this.service.listProjectTasks;
  }

  PopulateTasks(projectTasks:ProjectTasks)
{
  var id = document.getElementById("btnAdd");
  this.service.PopulateProjects(projectTasks);

  //this._router.navigate(['/addTask',projectTasks]);
//this.service.PopulateUsers(user);
}


PopulateEndTasks(projectTasks:ProjectTasks)
{
  projectTasks.Status = 'Yes';
  //this._router.navigate(['/addTask',projectTasks]);
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
