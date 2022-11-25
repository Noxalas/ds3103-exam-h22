using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : ControllerBase
{
    private readonly GameContext _context;

    public GameController(GameContext context)
    {
        _context = context; // initierer GameContext slik at vi har tilgang til CRUD mot databasen mot de Model-klassene angitt i DbSet<>
    }

    [HttpGet]
    public async Task<ActionResult<List<Game>>> Get()
    {
        try
        {
            List<Game> games = await _context.Games.ToListAsync();
            return Ok(games);
        }
        catch
        {
            return StatusCode(500); // 500 er en generisk status for at noe galt skjedde på serverside; eksempelvis her at Web Api ikke kunne nå databasen.
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get(int id)
    {
        Game? game = await _context.Games.FindAsync(id);

        if (game != null)
        {
            return Ok(game); // Status 200 + Game-objektet
        }
        else
        {
            return NotFound(); // Status 404 Ikke Funnet
        }
    }

    [HttpPost]
    public IActionResult Post(Game newGame)
    {
        try
        {
            _context.Games.Add(newGame);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { id = newGame.Id }, newGame); // Sender tilbake objektet som ble lagret inklusivt Id som den nettopp har fått etter lagring til databasen.
        }
        catch
        {
            return StatusCode(500); // 500 er en generisk status for at noe galt skjedde på serverside; eksempelvis her at Web Api ikke kunne nå databasen.
        }
    }

    /*
        Hvis man skal ha flere GET-metoder enn stardand-GET, som returnerer alle, og GET etter id benytter man Route action
    */
    [HttpGet("{title}")]
    [Route("[action]")] // https://localhost:7XXX/game/getbytitle/gameTitleHere
    public async Task<ActionResult<Game>> GetByTitle(string title)
    {
        IEnumerable<Game> chosenGames = from game in _context.Games where game.Title == title select game;

        if (chosenGames != null)
        {
            return Ok(chosenGames);
        }
        else
        {
            return NotFound();
        }
    }


}