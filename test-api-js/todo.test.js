

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

    // Test to check if the length of the todo list is reduced from 3 to 4 after deleting an item
    test("add_todos", () => {
        expect(todo_service.add_todo({"title":"T4","description":"D4","done":false}).todo.length).toEqual(4);
    });

    // Test to check if the length of the todo list is reduced from 4 to 3 after deleting an item
    test("delete_todos", () => {
        expect(todo_service.delete_todo(4).todo.length).toEqual(3);
    });


});