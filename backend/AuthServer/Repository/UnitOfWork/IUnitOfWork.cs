using Repository.Interfaces;
using Repository.Repositories;
using System.Threading.Tasks;

namespace Repository.UnitOfWork
{
    public interface IUnitOfWork
    {
        IUserRepository Users { get; set; }
        Task CommitAsync();
    }
}