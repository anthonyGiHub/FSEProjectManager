namespace ProjectManager.Entities
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ProjectManagerModel : DbContext
    {
        public ProjectManagerModel()
            : base("name = ProjectManagerModel")
        {
        }
        //public ProjectManagerModel()
        //   : base(@"Server=DOTNET;Database=WebAPIDB;Trusted_Connection=True;MultipleActiveResultSets=True;")
        //{
        //}
        // @"Server=DOTNET;Database=WebAPIDB;Trusted_Connection=True;MultipleActiveResultSets=True;"

        public virtual DbSet<ParentTask> ParentTasks { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<Task> Tasks { get; set; }

        //mine
        public virtual DbSet<Tasks> Taskss { get; set; }
        //mine
        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
