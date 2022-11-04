class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todo_data.todo.push(todo);
        console.log(this.todo_data.todo);
    }

    delete_todo(id){
        // Your code here
        this.todo_data.todo.splice(id-1,1)
        console.log("Deleting element ");
        console.log(this.todo_data.todo);
    }

    update_todo(id, todo){
        // Your code here
        this.todo_data.todo[id-1] = todo;
        console.log("Updating element ");
        console.log(this.todo_data.todo);
    }
}

const a = new todoservice()
a.add_todo({"title":"T4","description":"D4","done":false});
a.delete_todo(1)
a.update_todo(1,{"title":"T2","description":"D2","done":true})

module.exports= todoservice;