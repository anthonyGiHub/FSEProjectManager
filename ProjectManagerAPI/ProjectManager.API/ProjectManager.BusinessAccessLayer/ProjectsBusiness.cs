using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;
using ProjectManager.DataAccessLayer;


namespace ProjectManager.BusinessAccessLayer
{
   public class ProjectsBusiness
    {
        public void AddProject(Project project)
        {
            ProjectCRUD projectCrud = new ProjectCRUD();
            projectCrud.Addproject(project);
        }

        public List<Project> GetProjects()
        {
            List<Project> listProjects = new List<Project>();
            ProjectCRUD projectCrud = new ProjectCRUD();
            listProjects = projectCrud.GetProjects();
            return listProjects;
        }
    }
}
