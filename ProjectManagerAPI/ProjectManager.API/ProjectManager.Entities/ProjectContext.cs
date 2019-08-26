using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManagerTasks = ProjectManager.Entities.Task;
using System.Data.SqlClient;
using System.Data.Entity;

namespace ProjectManager.Entities
{
  public class ProjectContext
    {
        ProjectManagerModel projectManagerContext = new ProjectManagerModel();
        public List<ProjectManagerTasks> GetTasks()
        {
        
            List<ProjectManagerTasks> tasks = projectManagerContext.Tasks.ToList();
            return tasks;

        }
    }
}
