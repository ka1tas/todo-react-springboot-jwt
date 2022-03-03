import React, { Component } from 'react';
import TodoService from '../../api/todo/TodoService';
import AuthenticationService from '../../api/authentication/AuthenticationService';
import moment from 'moment';
import './TodoApp.css';



class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.state = {
            todos: [],
            message: ""
        }
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        TodoService.getAllTodos(AuthenticationService.getUserName())
            .then(response => {
                this.setState({
                    todos: response.data
                })
            })
    }

    deleteTodoClicked(id) {
        TodoService.deleteTodo(AuthenticationService.getUserName(), id)
            .then(response => {
                this.setState({
                    message: `The Todo with id  ${id} is deleted successfully.`
                })

                this.refreshTodos();
            })
    }

    updateTodoClicked(id) {
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
    }



    render() {
        return (
            <div className="listTodoComponent">
                <h1>List of Todos</h1>
                {(this.state.message.length !== 0) &&
                    <div className='alert alert-success'>{this.state.message}</div>}
                <div className="container">
                    <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <td>Descriptions</td>
                                <td>Target Date</td>
                                <td>is Completed?</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody className="todolisttableBody">
                            {this.state.todos.map((todo) =>
                                <tr key={todo.id}>
                                    <td> {todo.description} </td>
                                    <td> {moment(todo.targetDate).format('DD-MM-YYYY')} </td>
                                    <td> {todo.done.toString()} </td>
                                    <td><button className="btn btn-warning" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className='btn btn-danger' onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}> Add todo</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;