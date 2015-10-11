using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WestonInteractive.Models;

namespace WestonInteractive.Controllers
{
    public class APIController : Controller
    {
        // GET: API
        public JsonResult GetProjects()
        {
            List<PortfolioItem> Portfolio = new List<PortfolioItem>();


            return Json(new {
                Success = true,
                Portfolio
            });
        }
    }
}