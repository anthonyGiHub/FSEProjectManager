
import { ProjectService } from 'src/app/shared/project.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
// import { ProjectTasks } from './projectTasks.model';
import { Observable, observable } from 'rxjs';
import { Tasks } from './tasks.model';
import { ProjectTasks } from './projectTasks.model';
import { Project } from './project.model';
// import { compute } from 'src/app/simple-tests/compute';

// describe('compute',()=>{
//     let service: ProjectService;

//     it('should return 0 if input is negative',()=>{
// //    const result = this.compute(-1);
// const result = service.com
//     expect(result).toBe(0);

//     });

// });


describe('ProjectService', () => {
    let service: ProjectService;
    let http: HttpClient;
    let user: User;
    let projectTasks: ProjectTasks;
    // let listUser : User[]=[];
    // let listProject:Project[] =[];
     let task:Tasks;
    

    beforeEach(() => {

        service = new ProjectService(http);
        user = new User();
        user.FirstName = 'antony';
        user.LastName = 'raj';
        user.Employee_ID = 3
    
      //  let projectTasks: ProjectTasks;
        projectTasks = new ProjectTasks();
       

        projectTasks.Task1 = 'FirstTask';
        projectTasks.Project = 'TestProject';
        projectTasks.Priority = 4;
        projectTasks.Parent_Task = 'TestPartentTask';
        projectTasks.Task_ID = 1;
        projectTasks.Status = 'yes';
        projectTasks.User_ID = 1;
        projectTasks.Parent_ID = 1;
       projectTasks.Project_ID = 1;

        task = new Tasks();
        task.Task_ID = 1;
        task.Task1 = 'FirstTask';;
        task.Priority = 4;
        task.Status = 'yes';
        task.Parent_ID =  1;
        task.Project_ID = 1;
        task.User_ID = 1;
        // this.service.formProject = {

        //     Project_ID:null,
        //    StartDate : null,
        //     EndDate:null,
        //     Priority:null,
        //     User_ID:null,
        //     Project1:''
            
        //   }

        //   this.service.formTasks = {

        //     Task_ID:null,
        //     Parent_ID : null,
        //     Project_ID:null,
        //    Task1 :'',
        //    Start_Date:null,
        //    End_Date:null,
        //    Priority:null,
        //    Status:'',
        //    User_ID:null
        //   }
      

        listUser:[
            {
                FirstName:'jacob',
                LastName:'martin',
                Employee_ID:4
            },
            {
                FirstName:'antony',
                LastName:'raj',
                Employee_ID:3

            }
        ];
    
    });

    // it('should check if specified data are present', () => {
    //     //    const result = this.compute(-1);
    //     const cities = service.getCities();
    //     expect(cities).toContain('chenani');

    // });
    // it('should check if specified data are present', () => {
    //     //    const result = this.compute(-1);
    //     const cities = service.getCities();
    //     expect(cities).toContain('chenani');

    // });

    it('PopulateUsersFirstName', () => {
        service.PopulateUsers(user);

        expect(service.formUser.FirstName).toContain('antony');
    });
    it('PopulateUsersLastName', () => {
        service.PopulateUsers(user);

        expect(service.formUser.LastName).toContain('raj');
    });

    it('PopulateUsersEmployee_ID', () => {
        service.PopulateUsers(user);

        expect(service.formUser.Employee_ID).toEqual(3);
    });

    


    it('PopulateTasks', () => {
        service.PopulateTasks(projectTasks);
        expect(service.formTasks).toBeDefined();
    });
   
    it('PopulateTasksTaskId', () => {
        service.PopulateTasks(projectTasks);
        expect(service.formTasks.Task_ID).toEqual(1)
    });

    it('PopulateTasksTask', () => {
        service.PopulateTasks(projectTasks);
        expect(service.formTasks.Task1).toContain('FirstTask');
    });
    it('PopulateTasksProject', () => {
        service.PopulateTasks(projectTasks);
        expect(service.formTasks.Project_ID).toEqual(1);
    });
    it('PopulateTasksUserId', () => {
        service.PopulateTasks(projectTasks);
        expect(service.formTasks.User_ID).toEqual(1);
    });
    it('PopulateTasksParentId', () => {
        service.PopulateTasks(projectTasks);
        expect(service.formTasks.Parent_ID).toEqual(1);
    });

    it('PopulateTasksTask', () => {
        service.PopulateTasks(projectTasks);
        expect(service.formTasks.Status).toContain('yes');
    });

    it('PopulateProjects', () => {
        service.PopulateProjects(projectTasks);
        expect(service.formProject).toBeDefined();
    });
    
    it('PopulateProjectTaskID', () => {
        service.PopulateProjects(projectTasks);
        expect(service.formProject.User_ID).toEqual(1);
    });

    it('PopulateProjectProject', () => {
        service.PopulateProjects(projectTasks);
        expect(service.formProject.Priority).toEqual(4);
    });

    it('PopulateProjectTaskID', () => {
        service.PopulateProjects(projectTasks);
        expect(service.formProject.Project1).toContain('TestProject');
    });

    it('PopulateProjectTaskID', () => {
        service.PopulateProjects(projectTasks);
        expect(service.formProject.Project_ID).toEqual(1);
    });



//     PopulateProjects(projectTasks:ProjectTasks)
// {
//   this.formProject.Project1 = projectTasks.Project;
//   this.formProject.Project_ID = projectTasks.Project_ID;
//   this.formProject.StartDate = projectTasks.Start_Date;
//   this.formProject.EndDate = projectTasks.End_Date;
//   this.formProject.Priority = projectTasks.Priority;
//   this.formProject.User_ID = projectTasks.User_ID;

// }

    // PopulateTasks(projectTasks:ProjectTasks)
    // {
    //   this.formTasks.Task_ID = projectTasks.Task_ID;
    //   this.formTasks.Task1 = projectTasks.Task1;
    //   this.formTasks.Start_Date = projectTasks.Start_Date;
    //   this.formTasks.End_Date = projectTasks.End_Date;
    //   this.formTasks.Priority = projectTasks.Priority;
    //   this.formTasks.User_ID = projectTasks.User_ID;
    //   this.formTasks.Project_ID = projectTasks.Project_ID;
    //   this.formTasks.Parent_ID = projectTasks.Parent_ID;
    //   this.formTasks.Status = projectTasks.Status;
      
    // }

    //     it('sortUsersByFirstName', () => {


    //     service.sortUsersByFirstName();

    //     expect(service.listUser[0].FirstName).toContain('antony');
    // });

    
    // it('should check if specified user are present', () => {
    //     //    const result = this.compute(-1);
    //     const users = service.getUsers();
    //     expect(users[0].FirstTask).toContain('anto');

    // })



//     getUsers()
// {
//  // debugger;
//  return this.http.get("http://localhost:50494/api" + '/User')
//  .toPromise().then(res=>this.listUser = res as User[]);
// }


    // it('PopulateTasks', () => {
    //     service.PopulateTasks(projectTask);

    //     expect(service.formTasks.Task1).toContain('FirstTask');
    // });


    // PopulateTasks(projectTasks:ProjectTasks)
    // {
    //   this.formTasks.Task_ID = projectTasks.Task_ID;
    //   this.formTasks.Task1 = projectTasks.Task1;
    //   this.formTasks.Start_Date = projectTasks.Start_Date;
    //   this.formTasks.End_Date = projectTasks.End_Date;
    //   this.formTasks.Priority = projectTasks.Priority;
      
    // }




    //  sortUsersByFirstName()
    //  {
    //   var sortedArray: User[] = this.listUser.sort((obj1, obj2) => {
    //     if (obj1.FirstName > obj2.FirstName) {
    //         return 1;
    //     }

    //     if (obj1.FirstName < obj2.FirstName) {
    //         return -1;
    //     }

    //     return 0;
    // });
    //  }


});