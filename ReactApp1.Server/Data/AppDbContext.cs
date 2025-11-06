using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Cadastro> Cadastros { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //garante que a coluna Email seja única
        modelBuilder.Entity<Cadastro>()
            .HasIndex(s => s.Email)
            .IsUnique();
    }



}


