using System.Collections.Generic;
using System.Threading.Tasks;
using RealTimeTodo.Web.Model;

namespace RealTimeTodo.Web.Services
{
    public interface IToDoRepository
    {
        Task<List<Model.ToDoList>> GetLists();
    }

    public class InMemoryToDoRepository : IToDoRepository
    {
        private static List<ToDoList> Lists {get; set;} = new List<ToDoList>();

        public Task<List<ToDoList>> GetLists()
        {
            return Task.FromResult(Lists);
        }
    }
}