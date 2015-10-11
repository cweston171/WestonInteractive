using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;
using WestonInteractive.Models;
using WestonInteractive.VLL;

namespace WestonInteractive.Controllers
{
    public class PortfolioController : Controller
    {
        public async Task<ActionResult> GetPortfolio()
        {
            try
            {
                List<PortfolioItem> items = await PortfolioViewService.GetPortfolio(6) ;
                return Json(new {
                    Success = true,
                    Message = "Successfully retrieved portfolio.",
                    Items = items
                });
            }
            catch(Exception ex)
            {
                Trace.TraceError(ex.ToString());
                return Json(new
                {
                    Success = false,
                    Message = "Failed to retrieve portfolio! See console log for more details",
                    Details = ex
                });
            }
        }
    }
}
