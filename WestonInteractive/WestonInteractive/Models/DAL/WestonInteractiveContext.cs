using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace WestonInteractive.Models.DAL
{
    public class WestonInteractiveContext : DbContext
    {
        public WestonInteractiveContext() : base("WestonInteractiveContext")
        {
        }

        public DbSet<PortfolioItem> Portfolios { get; set; }
        public DbSet<GallerySet> Galleries { get; set; }
        public DbSet<GalleryItem> GalleryItem { get; set; }
        public DbSet<SkillSet> SkillSets { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}