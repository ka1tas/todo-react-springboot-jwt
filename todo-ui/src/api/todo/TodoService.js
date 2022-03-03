import axios from 'axios';
import { API_URL } from '../../Constants';

class TodoService {

    getAllTodos(name) {
        const url = `/users/${name}/todos`;
        return axios.get(url);
    }

    getTodosbyId(name, id) {
        const url = `/users/${name}/todos/${id}`;
        return axios.get(url);
    }

    deleteTodo(name, id) {
        const url = `/users/${name}/todos/${id}`;
        return axios.delete(url);
    }

    updateTodo(todo) {
        const url = `/users/${todo.username}/todos/${todo.id}`;
        return axios.put(url, todo);
    }

    createTodo(todo) {
        const url = `/users/${todo.username}/todos`;
        return axios.post(url, todo);
    }


}

export default new TodoService();