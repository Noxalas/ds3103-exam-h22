using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ElectricGamesApi.Interfaces;

namespace ElectricGamesApi.Models;
public class Quiz : IQuiz
{
    [Key]
    public int Id { get; set; }
    [ForeignKey("Game")]
    public int GameId { get; set; }
    public virtual Game GameObj { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string QuizText { get; set; } = null!;
}