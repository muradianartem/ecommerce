using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.Interfaces;
using Repository.Repositories;
using System.Threading.Tasks;

namespace Repository.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        public static bool Migrated = false;
        private AppDbContext _context;

        public UnitOfWork(AppDbContext context, IUserRepository userRepository)
        {
            _context = context;
            Users = userRepository;

            //use only locally
            if (!Migrated)
            {
                _context.Database.Migrate();
                Migrated = true;
            }
        }
        public virtual IUserRepository Users { get; set; }

        public async Task CommitAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}