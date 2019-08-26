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
    public class UserController : ApiController
    {
        [System.Web.Http.HttpPost]
        [ResponseType(typeof(User))]
        public IHttpActionResult AddUser(User user)
        {
            UsersBusiness userBusiness = new UsersBusiness();
            userBusiness.AddUsers(user);

            return CreatedAtRoute("DefaultApi", new { id = user.User_ID }, user);


        }

        public HttpResponseMessage GetUsers()
   {
            UsersBusiness userBusiness = new UsersBusiness();
            List<User> listUsers = userBusiness.GetUsers();
            return Request.CreateResponse(HttpStatusCode.OK, listUsers);
        }


        [System.Web.Http.HttpPut]
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(int id, User user)
        {
            UsersBusiness userBusiness = new UsersBusiness();
            userBusiness.PostUser(id, user);

            return CreatedAtRoute("DefaultApi", new { id = user.User_ID }, user);
        }

        [System.Web.Http.HttpPost]
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int userId)
        {
            UsersBusiness userBusiness = new UsersBusiness();
            userBusiness.DeleteUser(userId);
            return CreatedAtRoute("DefaultApi", new { id = userId }, userId);
        }
        //public IHttpActionResult DeleteUser(int userId, User user)
        //{
        //    UsersBusiness userBusiness = new UsersBusiness();
        //    userBusiness.DeleteUser(userId);
        //    return CreatedAtRoute("DefaultApi", new { id = userId }, user);

        //}

        //public IHttpActionResult DeleteUser(int userId,User user)
        //{
        //    UsersBusiness userBusiness = new UsersBusiness();
        //    userBusiness.DeleteUser(userId);
        //    return CreatedAtRoute("DefaultApi", new { id = userId }, user);
        //}
    }
}