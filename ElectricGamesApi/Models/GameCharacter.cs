using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElectricGamesApi.Models;
public class GameCharacter : IGameCharacter
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    [ForeignKey("Game")]
    public int GameId { get; set; }
    public virtual Game Game { get; set; } = null!;
}