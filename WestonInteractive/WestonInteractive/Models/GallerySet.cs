using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WestonInteractive.Models
{
    public class GallerySet
    {
        public GallerySet()
        {
            Items = new List<GalleryItem>();
        }

        [Key]
        public long ID { get; set; }

        [Required]
        public long ProjectID { get; set; }

        [Required]
        public string Title { get; set; }

        [StringLength(255, ErrorMessage = "Please pull your head out of your ass.")]
        public string Description { get; set; }
        
        public ICollection<GalleryItem> Items { get; set; }
    }
}