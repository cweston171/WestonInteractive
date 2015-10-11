using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WestonInteractive.Enums;

namespace WestonInteractive.Models
{
    public class PortfolioItem
    {
        public PortfolioItem()
        {
            StartedDate = DateTime.Now;
            EndedDate = DateTime.Now;
            Status = ProjectStatus.Open;
            Gallery = new GallerySet();
        }

        [Key]
        public long ID { get; set; }

        [Required]
        [StringLength(150)]
        public string Title { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        [Required]
        public DateTime StartedDate { get; set; }
        public DateTime? EndedDate { get; set; }

        [Required]
        public ProjectStatus Status { get; set; }
        
        [Required]
        public bool IsFeatured { get; set; }

        public GallerySet Gallery { get; set; }
        public SkillSet Skills { get; set; }
    }
}