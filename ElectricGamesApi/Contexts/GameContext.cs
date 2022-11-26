#nullable disable
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Contexts;
public class GameContext : DbContext
{
    public GameContext(DbContextOptions<GameContext> options) : base(options) { }
    public DbSet<Game> Games { get; set; }
    public DbSet<GameCharacter> GameCharacters { get; set; }
    public DbSet<Ability> Abilities { get; set; }
}
