using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuizQuestionController : EGController
{
    public QuizQuestionController(GameContext context) : base(context) { }

    [HttpGet]
    public async Task<ActionResult<List<QuizQuestion>>> Get()
    {
        try
        {
            List<QuizQuestion> question = await _context.QuizQuestions.ToListAsync();
            return Ok(question);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<QuizQuestion>> Get(int id)
    {
        QuizQuestion? question = await _context.QuizQuestions.FindAsync(id);

        if (question != null)
        {
            return Ok(question);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        if (id <= 0)
        {
            return BadRequest("Not a valid game id");
        }

        var question = _context.QuizQuestions.Where(qa => qa.Id == id).FirstOrDefault<QuizQuestion>();

        if (question != null)
        {
            _context.QuizQuestions.Remove(question);

            _context.SaveChanges();
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }

    [HttpPost("{question}")]
    public IActionResult Post(QuizQuestion newQuestion)
    {
        try
        {
            _context.QuizQuestions.Add(newQuestion);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { id = newQuestion.Id }, newQuestion);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{question}")]
    public IActionResult Put(QuizQuestion question)
    {
        var existingQuestion = _context.QuizQuestions.Where(q => q.Id == question.Id).FirstOrDefault();

        if (existingQuestion != null)
        {
            // TODO: Add more to Put method
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }
}