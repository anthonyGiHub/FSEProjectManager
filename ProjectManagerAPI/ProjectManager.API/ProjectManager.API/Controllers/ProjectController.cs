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
    public class ProjectController : ApiController
    {
        // GET: Project
        //public ActionResult Index()
        //{
        //    return View();
        //}
        [System.Web.Http.HttpPost]
        [ResponseType(typeof(Project))]
        public IHttpActionResult AddProject(Project project)
        {
            ProjectsBusiness projectBusiness = new ProjectsBusiness();
            projectBusiness.AddProject(project);

            return CreatedAtRoute("DefaultApi", new { id = project.Project_ID }, project);
        }

        public HttpResponseMessage GetProjects()
        {
            ProjectsBusiness projectBusiness = new ProjectsBusiness();
            List<Project> listProjects = projectBusiness.GetProjects();
            //listProjects[0].StartDate
            //     = listProjects[0].StartDate.ToString(listProjects[0].StartDate,"");
            //listProjects[0].EndDate
            //     = listProjects[0].EndDate.ToString('dd//MM/yyyy');
            return Request.CreateResponse(HttpStatusCode.OK, listProjects);
        }

    }
}