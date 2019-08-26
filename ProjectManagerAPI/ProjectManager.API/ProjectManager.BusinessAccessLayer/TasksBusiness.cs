using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;
using ProjectManagerTasks = ProjectManager.Entities.Task;
using ProjectManager.DataAccessLayer;

namespace ProjectManager.BusinessAccessLayer
{
   public class TasksBusiness
    {

        public void AddTask(Tasks task)
        {
            TaskCRUD taskCrud = new TaskCRUD();
            taskCrud.AddTask(task);
        }

        //public List<ProjectManagerTasks> GetTasks()
        //{
        //    List<ProjectManagerTasks> listTaskModel = new List<ProjectManagerTasks>();
        //    TaskCRUD taskCrud = new TaskCRUD();
        //    listTaskModel = taskCrud.GetTasks();
        //    return listTaskModel;


        //}

        public List<ProjectTasks> GetTasks()
        {
            List<ProjectTasks> listTaskModel = new List<ProjectTasks>();
            ProjectTaskCRUD taskCrud = new ProjectTaskCRUD();
            listTaskModel =  taskCrud.GetParentTasks();
            return listTaskModel;
        }
        //public List<ProjectManagerTasks> GetProjectTasks()
        //{
        //    List<ProjectManagerTasks> listTaskModel = new List<ProjectManagerTasks>();
        //    TaskCRUD taskCrud = new TaskCRUD();
        //    listTaskModel = taskCrud.GetTasks();
        //    return listTaskModel;
        //}

        //public ProjectManagerTasks GetTaskByTaskId(int taskId)
        //{
        //    ProjectManagerTasks taskModel = new ProjectManagerTasks();
        //    TaskCRUD taskCrud = new TaskCRUD();
        //    taskModel = taskCrud.GetTaskByTaskId(taskId);
        //    return taskModel;


        //}
        //public void UpdateTask(ProjectManagerTasks task)
        //{
        //    TaskCRUD taskCrud = new TaskCRUD();
        //    taskCrud.UpdateTask(task);

        //}


        public void DeleteTask(int taskId)
        {
            TaskCRUD taskCrud = new TaskCRUD();
            taskCrud.DeleteTask(taskId);

        }


    }
}
