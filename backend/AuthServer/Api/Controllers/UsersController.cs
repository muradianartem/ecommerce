using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.Auth;
using Services.Interfaceses;

namespace Api.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private IUserService service;

        public UsersController(IUserService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody]LoginModel model)
        {
            var user = new UserDTO { Email = model.Email, Password = model.Password };
            await service.CreateUserAsync(user);

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> IsUserExists(string email, string password)
        {
            var res = await service.IsUserExists(email, password);

            return Ok(res);
        }
    }
}
