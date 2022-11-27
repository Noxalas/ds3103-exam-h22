using ElectricGamesApi.Models;

namespace ElectricGamesApi.Interfaces;
public interface IQuizQuestion
{
    int Id { get; set; }
    int QuizId { get; set; }
    Quiz QuizObj { get; set; }
    string Question { get; set; }
    int MultipleAnswersCount { get; set; }
}