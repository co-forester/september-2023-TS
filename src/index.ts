interface ITodo {
    id: number;
    title: string
}

class NoteBook {
   private _todos: ITodo[]


   constructor(private name:string) {
       this._initMain()
   }


   private _getTodosFromLS(): void{
       this._todos = JSON.parse(localStorage.getItem(this.name)) || [{id:1, title:'wait'}]
   }

    private _initMain(): void{
       this._initTodos()
    }


    private _initTodos(): void {
       this._getTodosFromLS();
       const todosDiv = document.querySelector('#todos') as HTMLElement;
       this._todos.forEach(todo=>{
           const todoDiv = document.createElement('div');
           todoDiv.innerText = `${todo.id}) ${todo.title}`;
           todosDiv.append(todoDiv)
       })
    }
}







// new NoteBook('wakeUp')