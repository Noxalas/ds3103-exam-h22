using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuizQuestionAnswerController : EGController
{
    public QuizQuestionAnswerController(GameContext context) : base(context) { }

    [HttpGet]
    public async Task<ActionResult<List<QuizQuestionAnswer>>> Get()
    {
        try
        {
            List<QuizQuestionAnswer> questionAnswers = await _context.QuizQuestionAnswers.ToListAsync();
            return Ok(questionAnswers);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<QuizQuestionAnswer>> Get(int id)
    {
        QuizQuestionAnswer? questionAnswer = await _context.QuizQuestionAnswers.FindAsync(id);

        if (questionAnswer != null)
        {
            return Ok(questionAnswer);
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

        var questionAnswer = _context.QuizQuestionAnswers.Where(qa => qa.Id == id).FirstOrDefault<QuizQuestionAnswer>();

        if (questionAnswer != null)
        {
            _context.QuizQuestionAnswers.Remove(questionAnswer);

            _context.SaveChanges();
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }

    [HttpPost("{questionAnswer}")]
    public IActionResult Post(QuizQuestionAnswer newAnswer)
    {
        try
        {
            _context.QuizQuestionAnswers.Add(newAnswer);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { id = newAnswer.Id }, newAnswer);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{questionAnswer}")]
    public IActionResult Put(QuizQuestionAnswer quiz)
    {
        var existingAnswer = _context.QuizQuestionAnswers.Where(qa => qa.Id == quiz.Id).FirstOrDefault();

        if (existingAnswer != null)
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