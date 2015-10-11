using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WestonInteractive.Enums;

namespace WestonInteractive.Models
{
    public class GalleryItem
    {
        public GalleryItem()
        {
            Type = MediaType.image; // default new GalleryItems to images
        }
        [Key]
        public long ID { get; set; }

        [Required]
        public long GalleryID { get; set; }

        [Required]
        [StringLength(150)]
        public string Title { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        [Required]
        public string Url { get; set; }

        [Required]
        public MediaType Type { get; set; }
    }
}