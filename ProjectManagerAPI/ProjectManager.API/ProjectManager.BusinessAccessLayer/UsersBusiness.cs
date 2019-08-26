using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManager.Entities;
using ProjectManager.DataAccessLayer;




namespace ProjectManager.BusinessAccessLayer
{
    public  class UsersBusiness
    {
        public void AddUsers(User user)
        {
            UserCRUD userCrud = new UserCRUD();
            userCrud.AddUser(user);
        }

        public List<User> GetUsers()
        {
            List<User> listUserModel = new List<User>();
            UserCRUD userCrud = new UserCRUD();
            listUserModel = userCrud.GetUsers();
            return listUserModel;
        }
        public void PostUser(int id,User user)
        {
            UserCRUD userCrud = new UserCRUD();
            userCrud.PostUser(id, user);
        }

        public void DeleteUser(int userId)
        {
            UserCRUD userCrud = new UserCRUD();
            userCrud.DeleteUser(userId);
        }
    }
}
