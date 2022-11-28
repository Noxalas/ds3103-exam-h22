using ElectricGamesApi.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class EGController : ControllerBase
{
    protected readonly GameContext _context;

    public EGController(GameContext context)
    {
        _context = context;
    }
}