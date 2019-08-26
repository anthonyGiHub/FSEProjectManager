using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;

namespace ProjectManager.DataAccessLayer
{
    public class ProjectCRUD
    {
        ProjectManagerModel projectManagerContext = new ProjectManagerModel();
        public void Addproject(Project project)
        {
            if (project.Project_ID == 0)
            {
                projectManagerContext.Projects.Add(project);
                projectManagerContext.SaveChanges();
            }
            else {
                projectManagerContext.Projects.Attach(project);
                projectManagerContext.Entry(project).State = System.Data.Entity.EntityState.Modified;
                projectManagerContext.SaveChanges();
               
            }
            
        }
        public List<Project> GetProjects()
        {
            List<Project> projects = projectManagerContext.Projects.ToList();
            return projects;
        }

        public void PostProject(int projectID, Project project)
        {         
            projectManagerContext.Projects.Attach(project);
            projectManagerContext.Entry(project).State = System.Data.Entity.EntityState.Modified;
            projectManagerContext.SaveChanges();
        }

        public void DeleteProject(int projectID)
        {
            var deleteProject = projectManagerContext.Projects.SingleOrDefault(projectid => projectid.Project_ID == projectID);
            if (deleteProject != null)
            {
                projectManagerContext.Projects.Remove(deleteProject);
                projectManagerContext.Entry(deleteProject).State = System.Data.Entity.EntityState.Deleted;
                projectManagerContext.SaveChanges();
            }
        }
    }
}
