package com.kraken.restservice.todoservice.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.kraken.restservice.todoservice.model.Todo;
import com.kraken.restservice.todoservice.service.TodoService;

@RestController
@CrossOrigin
public class TodosController {

	@Autowired
	private TodoService todoService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAllTodos(username);
	}

	@GetMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> getTodobyId(@PathVariable String username, @PathVariable int id) {
		Todo todo = todoService.findById(id);
		if (todo != null) {
			return ResponseEntity.status(HttpStatus.OK).body(todo);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable Long id) {
		Todo todo = todoService.deleteById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<String> updateTodo(@PathVariable String username, @PathVariable int id,
			@RequestBody Todo todo) {

		Todo savedTodo = todoService.save(todo);

		if (savedTodo != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body("Todo has been updated");
		}
		return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body("Todo is not updated or Found");
	}

	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
		todo.setUsername(username);
		Todo savedTodo = todoService.save(todo);
		if (savedTodo != null) {
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedTodo.getId())
					.toUri();
			return ResponseEntity.created(uri).build();
		}
		return ResponseEntity.notFound().build();
	}

}
