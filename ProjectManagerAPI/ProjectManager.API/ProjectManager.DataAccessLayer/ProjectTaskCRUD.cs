using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;


namespace ProjectManager.DataAccessLayer
{
    public class ProjectTaskCRUD
    {
        ProjectManagerModel projectManagerContext = new ProjectManagerModel();
        public List<ProjectTasks> GetParentTasks()
        {

            List<ProjectTasks> projectTasksList = new List<ProjectTasks>();
            projectTasksList = (from pr in projectManagerContext.Projects
                                join ts in projectManagerContext.Taskss
                                on pr.Project_ID equals ts.Project_ID
                                join pt in projectManagerContext.ParentTasks
                                on ts.Parent_ID equals pt.Parent_ID
                                select new ProjectTasks()
                                {
                                    Task_ID = ts.Task_ID,
                                    Project = pr.Project1,
                                    Task1 = ts.Task1,
                                    Parent_Task = pt.Parent_Task,
                                    Start_Date = ts.Start_Date,
                                    End_Date = ts.End_Date,
                                    Priority = ts.Priority,
                                    User_ID = ts.User_ID,
                                    Parent_ID = ts.Parent_ID,
                                    Project_ID = ts.Project_ID,
                                    Status = ts.Status                                    
                                }).ToList();
            return projectTasksList;

        }
    }
}
