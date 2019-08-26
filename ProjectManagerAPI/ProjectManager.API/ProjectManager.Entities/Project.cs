namespace ProjectManager.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Project")]
    public partial class Project
    {
       

        [Key]
        public int Project_ID { get; set; }

        [Column("Project")]
        [StringLength(50)]
        public string Project1 { get; set; }

        public DateTime? StartDate { get; set; }

        [Column(TypeName = "date")]
        public DateTime? EndDate { get; set; }

        public int? Priority { get; set; }

        //change
        public int? User_ID { get; set; }
        //change


    }
}
