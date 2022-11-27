using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuizController : EGController
{
    public QuizController(GameContext context) : base(context) { }

    [HttpGet]
    public async Task<ActionResult<List<Quiz>>> Get()
    {
        try
        {
            List<Quiz> quizzes = await _context.Quizzes.ToListAsync();
            return Ok(quizzes);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Quiz>> Get(int id)
    {
        Quiz? quiz = await _context.Quizzes.FindAsync(id);

        if (quiz != null)
        {
            return Ok(quiz);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpGet("[action]/{game}")]
    public void GetByGame(Game game) { }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        if (id <= 0)
        {
            return BadRequest("Not a valid game id");
        }

        var quiz = _context.Quizzes.Where(q => q.Id == id).FirstOrDefault<Quiz>();

        if (quiz != null)
        {
            _context.Quizzes.Remove(quiz);

            _context.SaveChanges();
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }

    [HttpPost("{quiz}")]
    public IActionResult Post(Quiz newQuiz)
    {
        try
        {
            _context.Quizzes.Add(newQuiz);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { id = newQuiz.Id }, newQuiz);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{quiz}")]
    public IActionResult Put(Quiz quiz)
    {
        var existingQuiz = _context.Quizzes.Where(q => q.Id == quiz.Id).FirstOrDefault();

        if (existingQuiz != null)
        {
            existingQuiz.GameObj = quiz.GameObj;
            existingQuiz.Name = quiz.Name;
            existingQuiz.QuizText = quiz.QuizText;

        }
        else
        {
            return NotFound();
        }

        return Ok();
    }
}