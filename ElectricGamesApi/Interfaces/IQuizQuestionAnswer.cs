using ElectricGamesApi.Models;

namespace ElectricGamesApi.Interfaces;
public interface IQuizQuestionAnswer
{
    int Id { get; set; }
    int QuizQuestionId { get; set; }
    QuizQuestion QuizQuestionObj { get; set; }
    string QuizAnswerText { get; set; }
    bool CorrectAnswer { get; set; }
}