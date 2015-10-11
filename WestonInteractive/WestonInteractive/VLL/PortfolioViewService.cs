using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WestonInteractive.Models;

namespace WestonInteractive.VLL
{
    public class PortfolioViewService
    {
        /// <summary>
        /// Retrieves the entire Weston Interactive Portfolio object
        /// </summary>
        /// <returns></returns>
        public static async Task<List<PortfolioItem>> GetPortfolio(int? num)
        {
            // WHERE num is the number of records desired
            List<PortfolioItem> portfolio = new List<PortfolioItem>();
            int i = 0;
            while (i < num)
            {
                portfolio.Add(DummyPortfolioItem(i));
            }
            return portfolio;
        }

        public static PortfolioItem DummyPortfolioItem(int number)
        {
            return new PortfolioItem()
            {
                ID = number,
                Gallery = new GallerySet(),
                Title = "Gallery Item Number: " + number,
                Description = "This is a project description for project number: " + number,
                Status = (number % 2 == 0) ? Enums.ProjectStatus.Completed : Enums.ProjectStatus.Open
            };
        }

    }
}