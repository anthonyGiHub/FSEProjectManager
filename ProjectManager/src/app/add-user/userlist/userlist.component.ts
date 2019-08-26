import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { User } from 'src/app/shared/user.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 

  constructor(public service :ProjectService) { }

  ngOnInit() {
    this.service.refreshUserList();
    this.service.filteredUsers = this.service.listUser;
  //  this.service.sortUsers();
  //  this.service.filteredUsers.sort()
   //this.service.listUser =   this.service.refreshUserList();
  //this.service.listUser = this.service.refreshUserList();
  }

  sortUsers(value:string)
 {
   if(value == "FirstName")
   {
    this.service.sortUsersByFirstName();
   }
   if(value == "LastName")
   {
    this.service.sortUsersByLastName();
   }
   if(value == "EmployeeID")
   {
    this.service.sortUsersByEmployeeId();
   }
  
   this.service.filteredUsers = this.service.listUser;
 }
 PopulateUsers(user:User)
{
this.service.PopulateUsers(user);
}
DeleteUsers(userId:number)
{
  this.service.DeleteUsers(userId).subscribe(res=>{this.service.refreshUserList();});
}
// DeleteUsers(user:User)
// {
//   this.service.DeleteUsers(user).subscribe(res=>{this.PopulateUsers(user)});
// }

  // updateRecord(form:NgForm)
  // {
  //   this.service.putUser(form.value).subscribe(res=>{
  //   this.resetForm(form)
  //  });
  // }



}

