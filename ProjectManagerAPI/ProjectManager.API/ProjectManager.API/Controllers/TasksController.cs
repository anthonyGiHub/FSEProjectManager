using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectManager.Entities;
using ProjectManager.BusinessAccessLayer;
using System.Web.Http.Description;


namespace ProjectManager.API.Controllers
{
    public class TasksController : ApiController
    {
        // GET: Tasks
        [System.Web.Http.HttpPost]
        [ResponseType(typeof(Tasks))]
        public IHttpActionResult AddTask(Tasks task)
        {
            TasksBusiness taskManagerBusiness = new TasksBusiness();
            taskManagerBusiness.AddTask(task);

            return CreatedAtRoute("DefaultApi", new { id = task.Task_ID }, task);
        }

        public HttpResponseMessage GetTasks()
        {
            TasksBusiness taskBusiness = new TasksBusiness();
            List<ProjectTasks> listProjectTask = taskBusiness.GetTasks();
            return Request.CreateResponse(HttpStatusCode.OK, listProjectTask);

            

        }
    }
}