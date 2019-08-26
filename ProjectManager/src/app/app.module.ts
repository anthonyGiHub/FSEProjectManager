import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
// import {AppRoutingModule} from './app-routing.module';
//new
import {ReactiveFormsModule} from '@angular/forms';
import { ProjectService } from './shared/project.service';
// import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './add-user/user/user.component';
import { UserlistComponent } from './add-user/userlist/userlist.component';
import { ProjectComponent } from './add-project/project/project.component';
import { ProjectlistComponent } from './add-project/projectlist/projectlist.component';
//end

const appRoutes:Routes = [
  {path:'addProj',component:AddProjectComponent},
  {path:'addTask',component:AddTaskComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'viewTask',component:ViewTaskComponent},
  // {path:'addEmployee',component:EmployeeComponent},
  // {path:'followers',component:AddComponent},
  // {path:'posts',component:EditComponent}
  {path:'addTask/:task',component:AddTaskComponent},
  
  
  
  
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddProjectComponent,
    AddTaskComponent,
    ViewTaskComponent,
    // EmployeeComponent,
    UserComponent,
    UserlistComponent,
    ProjectComponent,
    ProjectlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  // imports: [
  //     BrowserModule,
  //     ReactiveFormsModule
  //   ],
   providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
