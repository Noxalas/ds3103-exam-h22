using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GameController : EGController
{
    public GameController(GameContext context) : base(context) { }

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
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get(int id)
    {
        Game? game = await _context.Games.FindAsync(id);

        if (game != null)
        {
            return Ok(game);
        }
        else
        {
            return NotFound();
        }
    }

    /*
        Hvis man skal ha flere GET-metoder enn stardand-GET, som returnerer alle, og GET etter id benytter man Route action
    */
    [HttpGet("[action]/{title}")]
    public async Task<ActionResult<List<Game>>> GetByTitle(string title)
    {
        try
        {
            List<Game> games = await _context.Games.Where(g => g.Title == title).ToListAsync();
            return Ok(games);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        if (id <= 0)
        {
            return BadRequest("Not a valid game id");
        }

        var game = _context.Games.Where(a => a.Id == id).FirstOrDefault<Game>();

        if (game != null)
        {
            _context.Games.Remove(game);

            _context.SaveChanges();
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }

    [HttpPost("{game}")]
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

    [HttpPut("{game}")]
    public IActionResult Put(Game game)
    {
        var existingGame = _context.Games.Where(g => g.Id == game.Id).FirstOrDefault();

        if (existingGame != null)
        {
            existingGame.Title = game.Title;
            existingGame.Platform = game.Platform;
            existingGame.ReleaseYear = game.ReleaseYear;
            existingGame.Image = game.Image;
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }

}