using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WestonInteractive.Models
{
    public class SkillSet
    {
        public long ID { get; set; }
        public long PortfolioItemID { get; set; }

        public bool HTML5 { get; set; }
        public bool CSS3 { get; set; }
        public bool Javascript { get; set; }
        public bool JQuery { get; set; }
        public bool AngularJS { get; set; }
        public bool NodeJS { get; set; }
        public bool Git { get; set; }
        public bool Android { get; set; }
        public bool CSharp { get; set; }
        public bool PHP { get; set; }
        public bool AspNet5 { get; set; }

        public bool Photoshop { get; set; }
        public bool Dreamweaver { get; set; }
        public bool VisualStudio { get; set; }
        public bool Illustrator { get; set; }
        public bool InDesign { get; set; }
        public bool Flash { get; set; }
        public bool Premiere { get; set; }
        public bool AfterEffects { get; set; }
        public bool Encore { get; set; }
    }
}