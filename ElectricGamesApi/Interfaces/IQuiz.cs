using ElectricGamesApi.Models;

namespace ElectricGamesApi.Interfaces;
public interface IQuiz
{
    int Id { get; set; }
    int GameId { get; set; }
    Game GameObj { get; set; }
    string Name { get; set; }
    string QuizText { get; set; }

}