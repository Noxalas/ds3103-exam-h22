using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GameController : ControllerBase
{
    private readonly GameContext context;

    public GameController(GameContext _context)
    {
        context = _context; // initierer GameContext slik at vi har tilgang til CRUD mot databasen mot de Model-klassene angitt i DbSet<>
    }

    [HttpGet]
    public async Task<ActionResult<List<Game>>> Get()
    {
        try
        {
            List<Game> games = await context.Games.ToListAsync();
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
        Game? game = await context.Games.FindAsync(id);

        if( game != null )
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
            context.Games.Add(newGame);
            context.SaveChanges();
            return CreatedAtAction("Get", new {id = newGame.Id}, newGame ); // Sender tilbake objektet som ble lagret inklusivt Id som den nettopp har fått etter lagring til databasen.
        }
        catch
        {
            return StatusCode(500); // 500 er en generisk status for at noe galt skjedde på serverside; eksempelvis her at Web Api ikke kunne nå databasen.
        }    
    }


}