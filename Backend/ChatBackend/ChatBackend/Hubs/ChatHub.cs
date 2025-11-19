using Microsoft.AspNetCore.SignalR;
using ChatBackend.Models;

namespace ChatBackend.Hubs
{
    public class ChatHub: Hub
    {
      
        public async Task SendMessage(string user, string content)
        {
            var message = new Message
            {
                User = user,
                Content = content,
                Timestamp = DateTime.Now.ToLongTimeString()
            };

           
            await Clients.All.SendAsync("ReceiveMessage", message);
        }

        public override async Task OnConnectedAsync()
        {
        
            var systemMessage = new Message { User = "System", Content = $"Someone joined the chat.", Timestamp = DateTime.Now.ToLongTimeString() };
            await Clients.Others.SendAsync("ReceiveMessage", systemMessage);
            await base.OnConnectedAsync();
        }
    }
}