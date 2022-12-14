using ElectricGamesApi.Models;

namespace ElectricGamesApi.Interfaces;
public interface IGameCharacter
{
    int Id { get; set; }
    string Name { get; set; }
    int GameId { get; set; }
    Game Game { get; set; }
}