using System.Threading.Tasks;
using Models;
using Models.Exceptions;
using Repository.DatabaseModels;
using Repository.UnitOfWork;
using Services.Helpers;
using Services.Interfaceses;

namespace Services
{
    public class UserService : IUserService
    {
        private IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task CreateUserAsync(UserDTO model)
        {
            var userRecord = await _unitOfWork.Users.GetUserAsync(model.Email);
            if(userRecord != null)
            {
                throw new BadRequestException("User with this email alredy exists");
            }
            var passwordHash = PasswordHasher.HashPassword(model.Password);
            await _unitOfWork.Users.CreateUserAsync(new User { Email = model.Email, Password = passwordHash });
            await _unitOfWork.CommitAsync();
        }

        public async Task<bool> IsUserExists(string email, string pass)
        {
            var user = await _unitOfWork.Users.GetUserAsync(email);
            if(user == null)
            {
                throw new NotFoundException("User with this email doesn`t exists"); 
            }
            var verificationResult = PasswordHasher.VerifyHashedPassword(user.Password, pass);
            if (verificationResult == PasswordVerificationResult.Failed)
            {
                throw new InvalidCredsException("Invalid password");
            }

            return true;
        }
    }
}
