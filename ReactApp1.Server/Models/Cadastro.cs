namespace ReactApp1.Server.Models;

public class Cadastro
{
    //Chave primária do registro
    public int ID { get; set; }
    //Email a ser cadastrado (Deve ser único)
    public required string Email { get; set; }
    //Vai indicar de o usuário está ativo (true) ou não (false)
    public bool Status { get; set; } = true;
    //registra a data e hora da inscrição
    public DateTime DataDeInscricao { get; set; } = DateTime.UtcNow;


}