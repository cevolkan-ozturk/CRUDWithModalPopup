using CRUDWithModalPopup.DAL;
using CRUDWithModalPopup.Models.DBEntities;
using Microsoft.AspNetCore.Mvc;

namespace CRUDWithModalPopup.Controllers
{
    public class ProductController : Controller
    {
        private readonly MyAppDbContext _context;

        public ProductController(MyAppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public JsonResult GetProducts()
        {
            var products = _context.Products.ToList();
            return Json(products);
        }

        [HttpPost]
        public JsonResult Insert(Product model)
        {
            if(ModelState.IsValid)
            {
                _context.Products.Add(model);
                _context.SaveChanges();
                return Json("Product details saved."); 
            }
                return Json("Model validation failed");
            
        }
        

        
    }
}
