using System.ComponentModel.DataAnnotations;

namespace ElectricGamesApi.Models;
public class Ability : IAbility
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string IconImagePath { get; set; } = null!;
}