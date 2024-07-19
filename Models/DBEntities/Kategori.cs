using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace CRUDWithModalPopup.Models.DBEntities
{
    public class Kategori
    {
        [Key]
        public int KategoriId { get; set; }

        [Required]
        [DisplayName("Kategori Name")]
        public string? KategoriName { get; set; }
    }
}
