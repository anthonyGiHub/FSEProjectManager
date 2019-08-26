using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManager.Entities
{
   public class ProjectTasks
    {
        public int Task_ID { get; set; }
        public string Task1 { get; set; }
        public string Status { get; set; }
        public string Parent_Task { get; set; }
        public DateTime? Start_Date { get; set; }

        public DateTime? End_Date { get; set; }

        public int? Priority { get; set; }

        public string Project { get; set; }

        public int? Parent_ID { get; set; }

        public int? Project_ID { get; set; }

        public int? User_ID { get; set; }
    }
}
