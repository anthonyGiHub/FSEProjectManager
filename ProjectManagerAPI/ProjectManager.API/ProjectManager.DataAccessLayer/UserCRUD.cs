using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;

namespace ProjectManager.DataAccessLayer
{
    public class UserCRUD
    {
        ProjectManagerModel projectManagerContext = new ProjectManagerModel();

        public void AddUser(User user)
        {
            projectManagerContext.Users.Add(user);
            projectManagerContext.SaveChanges();
        }
        public List<User> GetUsers()
        {
            List<User> users = projectManagerContext.Users.ToList();
            return users;
        }

        public void PostUser(int useriD ,User user)
        {
            //var existingUser = projectManagerContext.Users.SingleOrDefault(taskid => taskid.Task_ID == task.Task_ID);
            //if (existingTask != null)
            //{
            //    //existingTask.Task = task.Task;
            //    //existingTask.Status = task.Status;
            //    //existingTask.StartDate = task.StartDate;
            //    //existingTask.EndDate = task.EndDate;
            //    //existingTask.Priority = task.Priority;
            //    //existingTask.ParentTaskId = task.ParentTaskId;
            //    //taskManagerContext.TaskModels.Attach(existingTask);
            //    //taskManagerContext.Entry(existingTask).State = System.Data.Entity.EntityState.Modified;
            //    //taskManagerContext.SaveChanges();

            //}

            projectManagerContext.Users.Attach(user);
            projectManagerContext.Entry(user).State = System.Data.Entity.EntityState.Modified;
            projectManagerContext.SaveChanges();
        }

        public void DeleteUser(int userId)
        {
            var deleteUser = projectManagerContext.Users.SingleOrDefault(userid => userid.User_ID == userId);
            if (deleteUser != null)
            {
                projectManagerContext.Users.Remove(deleteUser);
                projectManagerContext.Entry(deleteUser).State = System.Data.Entity.EntityState.Deleted;
                projectManagerContext.SaveChanges();
            }
        }

    }
}
