using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Teste_Mauricio.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ParcelamentoController : ControllerBase
    {
        // POST api/<ParcelamentoController>
        [HttpPost]
        public double Post(int parcelas, double valor) => (valor * parcelas * 1.05);

    }
}
