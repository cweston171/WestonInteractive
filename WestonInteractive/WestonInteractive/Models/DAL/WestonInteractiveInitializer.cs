using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WestonInteractive.Models.DAL
{
    public class WestonInteractiveInitializer : System.Data.Entity. DropCreateDatabaseIfModelChanges<WestonInteractiveContext>
    {
        protected override void Seed(WestonInteractiveContext context)
        {
            

            base.Seed(context);
        }
    }
}