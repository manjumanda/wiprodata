using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using OLMS_Project.Models;
using Microsoft.AspNetCore.Authorization;

namespace OLMS_Project.Controllers
{
    [Authorize]
        [ApiController]
        [Route("api/[controller]")]
        public class StudentController : Controller
        {
            private readonly OlmsDbContext _context;

            public StudentController(OlmsDbContext context)
            {
                _context = context;
            }

            [HttpGet]
            public async Task<IActionResult> GetStudents() =>
                Ok(await _context.Users.ToListAsync());

            [HttpGet("{id}")]
            public async Task<IActionResult> GetStudent(int id)
            {
                var student = await _context.Users.FindAsync(id);
                return student == null ? NotFound() : Ok(student);
            }

            [HttpPost]
            public async Task<IActionResult> CreateStudent(Users student)
            {
                _context.Users.Add(student);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetStudent), new { id = student.UserID }, student);
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> UpdateStudent(int id, Users student)
            {
                if (id != student.UserID) return BadRequest();

                _context.Entry(student).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }

            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteStudent(int id)
            {
                var student = await _context.Users.FindAsync(id);
                if (student == null) return NotFound();

                _context.Users.Remove(student);
                await _context.SaveChangesAsync();
                return NoContent();
            }
        }
    }