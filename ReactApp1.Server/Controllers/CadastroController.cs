using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Data;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace ReactApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CadastroController (AppDbContext context)
        {
            _context = context;
        }

        public class SubscribeRequest
        {
            [Required(ErrorMessage = "O email é obrigatório.")]
            [EmailAddress(ErrorMessage = "Formato de email inválido. ")]
            public required string Email { get; set; }
        }


        //Caminho de cadastro
        [HttpPost]
        public async Task<IActionResult> Subscribe([FromBody] SubscribeRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var normalizedEmail = request.Email.ToLowerInvariant();

            //Verifica se ja existe algum registro com o email (Ativo ou não)
            var existingCadastro = await _context.Cadastros.FirstOrDefaultAsync(c => c.Email == normalizedEmail);
            if (existingCadastro != null)
            {
                if (existingCadastro.Status) 
                {
                    return Conflict("Este e-mail já está cadastrado e ativo em nossos registros. ");
                }

                //Caso ele esteja inativo, reativa
                existingCadastro.Status = true;
                existingCadastro.DataDeInscricao = DateTime.UtcNow;
                _context.Cadastros.Update(existingCadastro);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Inscrição reativada com sucesso! " });
            }

            //Cria um novo registro
            var newCadastro = new Cadastro
            {
                Email = normalizedEmail,
                Status = true,
                DataDeInscricao = DateTime.UtcNow
            };
            
            _context.Cadastros.Add(newCadastro);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof (Subscribe), newCadastro);
        }

        //Caminho de descadastro
        [HttpDelete("unsubscribe/{email}")]
        public async Task<IActionResult> Unsubscribe(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest("O e-mail é obrigatório para o descadastro.");
            }

            var normalizedEmail = email.ToLowerInvariant();

            //Tenta localizar o e-mail ATIVO
            var cadastro = await _context.Cadastros.FirstOrDefaultAsync(c => c.Email == normalizedEmail && c.Status);

            if (cadastro == null)
            {
                return NotFound("E-mail não encontrado ou já descadastrado.");
            }

            // desativa o cadastro 
            cadastro.Status = false;
            _context.Cadastros.Update(cadastro);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Descadastro realizado com sucesso. " });
        }
    }








}