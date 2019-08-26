using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectManager.Entities;
using ProjectManagerTasks = ProjectManager.Entities.Task;
using ProjectManager.BusinessAccessLayer;
using System.Web.Http.Description;


namespace ProjectManager.API.Controllers
{
    public class TaskController : ApiController
    {
        //[System.Web.Http.HttpPost]
        //[ResponseType(typeof(ProjectManagerTasks))]
        //public IHttpActionResult AddTask(ProjectManagerTasks task)
        //{
        //    TasksBusiness taskManagerBusiness = new TasksBusiness();
        //    taskManagerBusiness.AddTask(task);

        //    return CreatedAtRoute("DefaultApi", new { id = task.Task_ID }, task);


        //}
        //public void AddTask([FromBody]ProjectManagerTasks task)
        //{
        //    TasksBusiness taskManagerBusiness = new TasksBusiness();
        //    taskManagerBusiness.AddTask(task);


        //}



        //public List<ProjectManagerTasks> GetTasks()
        //{
        //    TasksBusiness taskManagerBusiness = new TasksBusiness();
        //    return taskManagerBusiness.GetTasks();

        //}

        //public HttpResponseMessage GetTasks()
        //{
        //    TasksBusiness taskManagerBusiness = new TasksBusiness();
        //    List<ProjectManagerTasks> listTasks = taskManagerBusiness.GetTasks();

        //    return Request.CreateResponse(HttpStatusCode.OK, listTasks);

        //}

        //public JsonResult  Get()
        //{
        //    JsonResult result = new JsonResult();
        //    result.Data = new string[] { "values1,values2" };
        //    result.ContentType = "text/plain";
        //    return result;

        //   // return new string[] { "values1,values2" };

        //}

        //public ProjectManagerTasks GetTaskByTaskId(int taskId)
        //{
        //    TasksBusiness taskManagerBusiness = new TasksBusiness();
        //    return taskManagerBusiness.GetTaskByTaskId(taskId);
        //}

        // PUT api/tasks
        //public void UpdateTask([FromBody]ProjectManagerTasks task)
        //{
        //    TasksBusiness taskManagerBusiness = new TasksBusiness();
        //    taskManagerBusiness.UpdateTask(task);
        //}

        // DELETE api/tasks/5
        public void DeleteTask(int taskId)
        {
            TasksBusiness taskManagerBusiness = new TasksBusiness();
            taskManagerBusiness.DeleteTask(taskId);
        }
    }
}