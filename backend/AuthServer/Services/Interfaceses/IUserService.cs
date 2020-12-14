using Models;
using System.Threading.Tasks;

namespace Services.Interfaceses
{
    public interface IUserService
    {
        Task CreateUserAsync(UserDTO user);

        Task<bool> IsUserExists(string email, string pass);
    }
}
