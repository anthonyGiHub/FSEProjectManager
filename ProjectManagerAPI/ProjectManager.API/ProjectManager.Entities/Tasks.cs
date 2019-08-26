namespace ProjectManager.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Tasks")]
    public partial class Tasks
    {
      

        [Key]
        public int Task_ID { get; set; }

        public int? Parent_ID { get; set; }

        public int? Project_ID { get; set; }

        [Column("Task")]
        [StringLength(50)]
        public string Task1 { get; set; }

        public DateTime? Start_Date { get; set; }

        public DateTime? End_Date { get; set; }

        public int? Priority { get; set; }

        [StringLength(50)]
        public string Status { get; set; }

        //change
        public int? User_ID { get; set; }
        //change

       
    }
}
