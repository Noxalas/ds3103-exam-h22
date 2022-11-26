namespace ElectricGamesApi.Models;

public interface IGameCharacter
{
    int Id { get; set; }
    string Name { get; set; }
    Game Game { get; set; }
}