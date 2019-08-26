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
    public class ParentTaskController : ApiController
    {
        [System.Web.Http.HttpPost]
        [ResponseType(typeof(ParentTask))]
        public IHttpActionResult AddParentTask(ParentTask parentTask)
        {
            ParentTasksBusiness parentTaskBusiness = new ParentTasksBusiness();
            parentTaskBusiness.AddParentTasks(parentTask);

            return CreatedAtRoute("DefaultApi", new { id = parentTask.Parent_ID }, parentTask);
        }

        public HttpResponseMessage GetParentTasks()
        {
            ParentTasksBusiness parentTaskBusiness = new ParentTasksBusiness();
            List<ParentTask> listParentTask = parentTaskBusiness.GetParentTasks();
            return Request.CreateResponse(HttpStatusCode.OK, listParentTask);
        }

    }
}