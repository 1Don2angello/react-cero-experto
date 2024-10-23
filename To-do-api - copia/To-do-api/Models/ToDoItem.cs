namespace ToDoApi.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Materia { get; set; }
        public DateTime FechaRecibida { get; set; }
        public DateTime FechaEntrega { get; set; }
        public int DiasRestantes
        {
            get
            {
                return (FechaEntrega - DateTime.Today).Days;
            }
        }
        public bool Urgente { get; set; }
        public string Prioridad { get; set; }
        public string? Documentos { get; set; }
        public string Tipo { get; set; }
    }
}
