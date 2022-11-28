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

    [HttpGet("[action]/{quizId}")]
    public async Task<ActionResult<List<QuizQuestion>>> GetQuestionsByQuizId(int quizId)
    {
        if (quizId <= 0) { return BadRequest("Not a valid quiz Id"); }

        List<QuizQuestion> questions = await _context.QuizQuestions.Where(q => q.QuizId == quizId).ToListAsync();

        if (questions != null)
        {
            return Ok(questions);
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
            existingQuestion.QuizObj = question.QuizObj;
            existingQuestion.Question = question.Question;
            existingQuestion.MultipleAnswersCount = question.MultipleAnswersCount;
        }
        else
        {
            return NotFound();
        }

        return Ok();
    }
}