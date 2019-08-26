using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;


namespace ProjectManager.DataAccessLayer
{
  public  class ParentTaskCRUD
    {
        ProjectManagerModel projectManagerContext = new ProjectManagerModel();
        public void AddParentTasks(ParentTask parentTask)
        {
            projectManagerContext.ParentTasks.Add(parentTask);
            projectManagerContext.SaveChanges();
        }
        public List<ParentTask> GetParentTasks()
        {
            List<ParentTask> parentTasks = projectManagerContext.ParentTasks.ToList();
            return parentTasks;
        }
    }
}
