console.log(document.forms);

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
        // this._todos.forEach(todo=>{
        for (let i = 0; i < this._todos.length; i++) {
            // let todo = this._todos[i];
            const todoDiv = document.createElement('div');
            todoDiv.innerText = `${this._todos[i].id}) ${this._todos[i].title}`;
            // let formEach = document.createElement('form');
            const butDel = document.createElement('button');
            butDel.classList.add('del');
            butDel.innerText = 'Delete!';
            let todo =this._todos[i];
            // formEach.append(butDel);
            todoDiv.appendChild(butDel)
            butDel.addEventListener('click', ()=>{
                console.log('!!!!!');
               // todoDiv.style.display='none';
               //  butDel.style.display='none';
                // delete this._todos[i].id;
                // delete this._todos[i].title;
                // delete this._todos[i];
                
                console.log(this._todos);
                localStorage.setItem(this.name, JSON.stringify(this._todos));
                this._initTodos();
            })
            todosDiv.append(todoDiv);
            todoDiv.append(butDel);
        }


    }
    // function deleted(id){
    //
    //     })
    // }
    // private _deleteTodo():void {

    //     this._getTodosFromLS()
    //     let butFormEach = document.forms[0].button;
    //     console.log('!!!!!!!!')
    // }

    private _initForm(): void{
        const form = document.forms[0] as HTMLFormElement;
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

