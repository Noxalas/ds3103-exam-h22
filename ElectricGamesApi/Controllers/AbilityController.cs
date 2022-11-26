using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AbilityController : ControllerBase
{
    private readonly GameContext _context;

    public AbilityController(GameContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Ability>>> Get()
    {
        try
        {
            List<Ability> abilities = await _context.Abilities.ToListAsync();
            return Ok(abilities);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Ability>> Get(int id)
    {
        Ability? ability = await _context.Abilities.FindAsync(id);

        if (ability != null)
        {
            return Ok(ability);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpPost("{ability}")]
    public IActionResult Post(Ability newAbility)
    {
        try
        {
            _context.Abilities.Add(newAbility);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { id = newAbility.Id }, newAbility);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{ability}")]
    public IActionResult Put(Ability ability)
    {
        var existingAbility = _context.Abilities.Where(a => a.Id == ability.Id).FirstOrDefault<Ability>();

        if (existingAbility != null)
        {
            existingAbility.Name = ability.Name;
            existingAbility.IconImagePath = ability.IconImagePath;

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
            return BadRequest("Not a valid ability id");
        }

        var ability = _context.Abilities.Where(a => a.Id == id).FirstOrDefault<Ability>();

        if (ability != null)
        {
            _context.Abilities.Remove(ability);

            _context.SaveChanges();
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }
}