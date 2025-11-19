namespace ChatBackend.Models
{
    public class Message
    {
        public required string User { get; set; }
        public string Content { get; set; }
        public string Timestamp { get; set; } = DateTime.Now.ToShortTimeString();
    }
}