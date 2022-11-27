using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ElectricGamesApi.Interfaces;

namespace ElectricGamesApi.Models;
public class QuizQuestionAnswer : IQuizQuestionAnswer
{
    [Key]
    public int Id { get; set; }
    [ForeignKey("QuizQuestion")]
    public int QuizQuestionId { get; set; }
    public virtual QuizQuestion QuizQuestionObj { get; set; } = null!;
    public string QuizAnswerText { get; set; } = null!;
    public bool CorrectAnswer { get; set; }
}