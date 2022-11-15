using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Educa.Model
{



    [Table("alunos")]
    public class Aluno
    {

        [Column("id")]
        public int Id { get; set; }

        [Column("nome_aluno")]
        public string Nome { get; set; } = string.Empty;

        [Column("cpf_aluno")]
        public string Cpf { get; set; }

        [Column("telefone_aluno")]
        public string Telefone { get; set; } = string.Empty; 

        [Column("email_aluno")]
        public string Email { get; set; } = string.Empty;

        
        [Column("idade_aluno")]
        public string Idade { get; set; } = string.Empty;

        


    }
}
