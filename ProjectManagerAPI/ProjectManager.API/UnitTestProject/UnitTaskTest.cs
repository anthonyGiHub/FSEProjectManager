using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectManager.API.Controllers;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using ProjectManager.Entities;
using System.Collections.Generic;
using ProjectManager.BusinessAccessLayer;
using ProjectManager.DataAccessLayer;


namespace UnitTestProject
{
    [TestClass]
    public class UnitTaskTest
    {
        [TestMethod]
        public void TestTasksController()
        {
            TasksController tc = new TasksController();
            tc.Request = new HttpRequestMessage();
            tc.Configuration = new HttpConfiguration();

            var response = tc.GetTasks();
            List<ProjectTasks> listProjectTask;
            Assert.IsTrue(response.TryGetContentValue<List<ProjectTasks>>(out listProjectTask));
            // Tasks tasks = new Tasks();
            Assert.AreEqual("Test", listProjectTask[0].Task1);
        }

        [TestMethod]
        public void AddTaskTest()
        {
            // Arrange  
            var controller = new TasksController();
            Tasks tasks = new Tasks
            {
                Task1 = "Test Tasks"
            };

            // Act  
            IHttpActionResult actionResult = controller.AddTask(tasks);
            var createdResult = actionResult as CreatedAtRouteNegotiatedContentResult<Tasks>;
            // Assert  
            Assert.IsNotNull(createdResult);
            Assert.AreEqual("DefaultApi", createdResult.RouteName);
            Assert.IsNotNull(createdResult.RouteValues["id"]);
        }

        //[TestMethod]
        //public void UpdateTaskTest()
        //{
        //    // Arrange  
        //    var controller = new TasksController();
        //    Tasks tasks = new Tasks
        //    {
        //        Task_ID = 2,
        //        Task1 = "Test Tasks"
        //    };
        //    // Act  
        //    IHttpActionResult actionResult = controller.AddTask(tasks);
        //    var contentResult = actionResult as NegotiatedContentResult<Tasks>;
        //    Assert.IsNotNull(contentResult);
        //    Assert.IsNotNull(contentResult.Content);


        [TestMethod]
        public void AddTaskBusiness()
        {
            // Arrange  
            
            var tasksBuiness = new TasksBusiness();
            Tasks tasks = new Tasks
            {
                Task1 = "Test Tasks Business"
            };

            try
            {
                tasksBuiness.AddTask(tasks);
                Assert.IsTrue(true);
            }

            catch {
                Assert.IsTrue(false);

            }
        }

        [TestMethod]
        public void GetTaskBusiness()
        {
            // Arrange  

            var tasksBuiness = new TasksBusiness();
            List<ProjectTasks> listProjectTask;
            listProjectTask = tasksBuiness.GetTasks();

            Assert.AreEqual("Test", listProjectTask[0].Task1);

        }

        [TestMethod]
        public void AddTaskCRUD()
        {
            // Arrange  

            var taskCRUD = new TaskCRUD();
            Tasks tasks = new Tasks
            {
                Task1 = "Test Tasks Business"
            };

            try
            {
                taskCRUD.AddTask(tasks);
                Assert.IsTrue(true);
            }

            catch
            {
                Assert.IsTrue(false);

            }
        }

        [TestMethod]
        public void GetProjectTaskCRUD()
        {
            // Arrange  

            var taskCRUD = new ProjectTaskCRUD();
            List<ProjectTasks> listProjectTask;
            listProjectTask = taskCRUD.GetParentTasks();

            Assert.AreEqual("Test", listProjectTask[0].Task1);

        }

        [TestMethod]
        public void TestUserController()
        {
            UserController tc = new UserController();
            tc.Request = new HttpRequestMessage();
            tc.Configuration = new HttpConfiguration();

            var response = tc.GetUsers();
            List<User> listProjectTask;
            Assert.IsTrue(response.TryGetContentValue<List<User>>(out listProjectTask));
            // Tasks tasks = new Tasks();
            Assert.AreEqual("antony", listProjectTask[0].FirstName);
        }

        [TestMethod]
        public void TestprojectController()
        {
            ProjectController tc = new ProjectController();
            tc.Request = new HttpRequestMessage();
            tc.Configuration = new HttpConfiguration();

            var response = tc.GetProjects();
            List<Project> listProjects;
            Assert.IsTrue(response.TryGetContentValue<List<Project>>(out listProjects));
            // Tasks tasks = new Tasks();
            Assert.AreEqual("Test", listProjects[0].Project1);
        }


        [TestMethod]
        public void TestParentTaskController()
        {
            ParentTaskController tc = new ParentTaskController();
            tc.Request = new HttpRequestMessage();
            tc.Configuration = new HttpConfiguration();

            var response = tc.GetParentTasks();
            List<ParentTask> listProjects;
            Assert.IsTrue(response.TryGetContentValue<List<ParentTask>>(out listProjects));
            // Tasks tasks = new Tasks();
            Assert.AreEqual("Task", listProjects[0].Parent_Task);
        }

        [TestMethod]
        public void GetUsersBusiness()
        {
            // Arrange  

            var tasksBuiness = new UsersBusiness();
            List<User> listProjectTask;
            listProjectTask = tasksBuiness.GetUsers();

            Assert.AreEqual("antony", listProjectTask[0].FirstName);

        }

        [TestMethod]
        public void GetProjectsBusiness()
        {
            // Arrange  

            var tasksBuiness = new ProjectsBusiness();
            List<Project> listProjectTask;
            listProjectTask = tasksBuiness.GetProjects();

            Assert.AreEqual("Test", listProjectTask[0].Project1);

        }

        [TestMethod]
        public void GetParentTasksBusiness()
        {
            // Arrange  

            var tasksBuiness = new ParentTasksBusiness();
            List<ParentTask> listProjectTask;
            listProjectTask = tasksBuiness.GetParentTasks();

            Assert.AreEqual("Test", listProjectTask[0].Parent_Task);

        }

    }
}
