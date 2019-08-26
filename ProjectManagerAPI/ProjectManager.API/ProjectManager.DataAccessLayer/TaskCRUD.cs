using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;
using ProjectManagerTasks = ProjectManager.Entities.Task;


namespace ProjectManager.DataAccessLayer
{
    public class TaskCRUD
    {
     // using ProjectManagerTasks =  ProjectManager.Entities.Task;

        ProjectManagerModel projectManagerContext = new ProjectManagerModel();
        
        public void AddTask(Tasks task)
        {
            if (task.Task_ID == 0)
            {
                projectManagerContext.Taskss.Add(task);
                projectManagerContext.SaveChanges();
            }
            else
            {
                projectManagerContext.Taskss.Attach(task);
                projectManagerContext.Entry(task).State = System.Data.Entity.EntityState.Modified;
                projectManagerContext.SaveChanges();
            }

        }

        public List<Tasks> GetTasks()
        {
   
            //projectManagerContext.lazylo
            List<Tasks> tasks = projectManagerContext.Taskss.ToList();
          //  List<ProjectManagerTasks> tasks = projectManagerContext.Tasks.Include(c=>c)
            return tasks;
            //List<ProjectManagerTasks> tasks = new List<ProjectManagerTasks>();
            //tasks = from x in projectManagerContext.Tasks
            //        select new
            //        {
            //             x.Task_ID
            //        };
            //return tasks.ToList();
            //ProjectContext obj = new ProjectContext();

            //List<ProjectManagerTasks> tasks = obj.GetTasks();
            //return tasks;

            //  Model1 m = new Model1();
            //var tes = m.Tasks.ToList();

            //  ProjectContext obj = new ProjectContext();

            //  List<ProjectManagerTasks> tasks = obj.GetTasks();
            //  return tasks;



        }

        public Tasks GetTaskByTaskId(int taskId)
        {
            //  ProjectManagerTasks task = projectManagerContext.Tasks.SingleOrDefault(taskid => taskid.TaskId == taskId);
            Tasks task = projectManagerContext.Taskss.SingleOrDefault(taskid => taskid.Task_ID == taskId);
            return task;

        }
        public void UpdateTask(Tasks task)
        {
            var existingTask = projectManagerContext.Taskss.SingleOrDefault(taskid => taskid.Task_ID == task.Task_ID);
            if (existingTask != null)
            {
                //existingTask.Task = task.Task;
                //existingTask.Status = task.Status;
                //existingTask.StartDate = task.StartDate;
                //existingTask.EndDate = task.EndDate;
                //existingTask.Priority = task.Priority;
                //existingTask.ParentTaskId = task.ParentTaskId;
                //taskManagerContext.TaskModels.Attach(existingTask);
                //taskManagerContext.Entry(existingTask).State = System.Data.Entity.EntityState.Modified;
                //taskManagerContext.SaveChanges();

            }

        }

        public void DeleteTask(int taskId)
        {
            var deleteTask = projectManagerContext.Taskss.SingleOrDefault(taskid => taskid.Task_ID == taskId);
            if (deleteTask != null)
            {
                projectManagerContext.Taskss.Remove(deleteTask);
                projectManagerContext.Entry(deleteTask).State = System.Data.Entity.EntityState.Deleted;
                projectManagerContext.SaveChanges();
            }
        }


    }
}
