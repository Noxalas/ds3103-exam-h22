using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ElectricGamesApi.Interfaces;

namespace ElectricGamesApi.Models;
public class QuizQuestion : IQuizQuestion
{
    [Key]
    public int Id { get; set; }
    [ForeignKey("Quiz")]
    public int QuizId { get; set; }
    public virtual Quiz QuizObj { get; set; } = null!;
    public string Question { get; set; } = null!;
    int IQuizQuestion.MultipleAnswersCount { get; set; }
}