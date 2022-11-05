

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements

    // Test to check if the length of the todo list is increased from 4 to 3 after inserting an item
    test("add_todos_check_list_length", () => {
        let result = todo_service.add_todo({"title":"T4","description":"New item added - D4","done":false});
        expect(result.todo.length).toEqual(4);

    });

    // Test to check if the item is inserted at the right index after inserting an item
    test("add_todos_check_element", () => {
        let result = todo_service.add_todo({"title":"T5","description":"New item added - D5","done":false});
        expect(result.todo[4]).toEqual({ title: 'T5', description: 'New item added - D5', done: false });
    });

    // Test to check if the length of the todo list is reduced from 5 to 4 after deleting an item
    test("delete_todos", () => {
        let result = todo_service.delete_todo(4)
        expect(result.todo.length).toEqual(4);
    });

    // Test to check if the to do item is updated in the right index
    test("update_todos", () => {
        let result = todo_service.update_todo(1,{"title":"T2-UPDATED","description":"D2-updated","done":true})
        //console.log(result.todo[0]);
        expect(result.todo[0]).toEqual({ title: 'T2-UPDATED', description: 'D2-updated', done: true });
    });

});