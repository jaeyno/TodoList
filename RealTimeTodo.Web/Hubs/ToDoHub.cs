using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using RealTimeTodo.Web.Model;
using RealTimeTodo.Web.Services;

namespace RealTimeTodo.Web.Hubs
{
    public class ToDoHub : Hub
    {
        private readonly IToDoRepository _toDoRepository;
        public ToDoHub(IToDoRepository toDoRepository)
        {
            _toDoRepository = toDoRepository;
        }

        public Task<List<ToDoList>> GetLists() 
        {
            return _toDoRepository.GetLists();
        }
    }
}