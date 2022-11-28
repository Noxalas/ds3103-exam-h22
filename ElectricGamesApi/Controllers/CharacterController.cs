using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CharacterController : EGController
{
    public CharacterController(GameContext context) : base(context) { }

    [HttpGet]
    public async Task<ActionResult<List<GameCharacter>>> Get()
    {
        try
        {
            List<GameCharacter> gameCharacters = await _context.GameCharacters.ToListAsync();
            return Ok(gameCharacters);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GameCharacter>> Get(int id)
    {
        GameCharacter? chosenCharacter = await _context.GameCharacters.FindAsync(id);

        if (chosenCharacter != null)
        {
            return Ok(chosenCharacter);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpPost("{gameCharacter}")]
    public IActionResult Post(GameCharacter newGameCharacter)
    {
        Console.WriteLine(newGameCharacter);
        try
        {
            _context.GameCharacters.Add(newGameCharacter);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { id = newGameCharacter.Id }, newGameCharacter);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{gameCharacter}")]
    public IActionResult Put(GameCharacter gameCharacter)
    {
        var existingCharacter = _context.GameCharacters.Where(gc => gc.Id == gameCharacter.Id).FirstOrDefault<GameCharacter>();

        if (existingCharacter != null)
        {
            existingCharacter.Name = gameCharacter.Name;
            existingCharacter.Game = gameCharacter.Game;

            _context.SaveChanges();
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        if (id <= 0)
        {
            return BadRequest("Not a valid character id");
        }

        var character = _context.GameCharacters.Where(gc => gc.Id == id).FirstOrDefault<GameCharacter>();

        if (character != null)
        {
            _context.GameCharacters.Remove(character);

            _context.SaveChanges();
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }
}