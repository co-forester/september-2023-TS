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
        this._todos = JSON.parse(localStorage.getItem(this.name)) || []
    }

    private _setTodoToFormLS():void{
        localStorage.setItem(this.name, JSON.stringify(this._todos));
        this._initTodos()
    }

    private _initMain(): void{
        this._initTodos();
        this._initForm()
    }


    private _initTodos(): void {
        this._getTodosFromLS();
        const todosDiv = document.querySelector('#todos') as HTMLElement;
        todosDiv.innerHTML = '';
        this._todos.forEach(todo=>{
            const todoDiv = document.createElement('div');
            todoDiv.innerText = `${todo.id}) ${todo.title}`;
            const butDel = document.createElement('button');
            butDel.innerText = 'Del';
            butDel.onclick = function ():void{
                todosDiv.removeChild(todoDiv);
            }
            todoDiv.append(butDel);
            todosDiv.append(todoDiv)
        })
    }



    private _initForm(): void{
        const form = document.forms['form'] as HTMLFormElement;
        form.onsubmit = (e):void =>{
            e.preventDefault();
            const input = e.target['title'] as HTMLInputElement;
            const  id: number = this._todos.slice(-1)[0]?.id + 1 || 1;
            this._todos.push({id, title: input.value});
            this._setTodoToFormLS();
            form.reset()
        }
    }



}


new NoteBook( 'fds');
