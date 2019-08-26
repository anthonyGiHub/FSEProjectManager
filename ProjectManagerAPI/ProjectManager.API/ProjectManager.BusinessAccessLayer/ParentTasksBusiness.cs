using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;
using ProjectManager.DataAccessLayer;

namespace ProjectManager.BusinessAccessLayer
{
  public class ParentTasksBusiness
    {
        public void AddParentTasks(ParentTask parentTask)
        {
            ParentTaskCRUD parentTaskCrud = new ParentTaskCRUD();
            parentTaskCrud.AddParentTasks(parentTask);
        }

        public List<ParentTask> GetParentTasks()
        {
            List<ParentTask> listParentTaskModel = new List<ParentTask>();
            ParentTaskCRUD parentTaskCrud = new ParentTaskCRUD();
            listParentTaskModel = parentTaskCrud.GetParentTasks();
            return listParentTaskModel;
        }

    }
}
