using Microsoft.EntityFrameworkCore;
using ToDoApi.Models;

namespace To_do_api.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
            { 
            /*MIGRACION DE LA BD*/
       
        }
        public DbSet<TaskItem> Tasks { get; set; }


    }
}
