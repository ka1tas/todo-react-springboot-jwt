package com.kraken.restservice.todoservice.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kraken.restservice.todoservice.model.Todo;
import com.kraken.restservice.todoservice.repository.TodoJpaRepository;

@Service
public class TodoService {

	@Autowired
	private TodoJpaRepository todoJpaRepository;


	public List<Todo> findAllTodos(String username) {
		return todoJpaRepository.findByUsername(username);
	}

	public Todo save(Todo todo) {
		if (todo.getId() == -1 || todo.getId() == 0) {
			todoJpaRepository.save(todo);
		} else {
			if (todoJpaRepository.findById(todo.getId()) != null) {
				todoJpaRepository.save(todo);
			}
		}

		return todo;
	}

	public Todo deleteById(Long id) {
		Todo todo = findById(id);
		if (todo == null) {
			return null;
		} else {
			todoJpaRepository.delete(todo);
			return todo;
		}

	}

	public Todo findById(long id) {
		return todoJpaRepository.findById(id).get();
	}

}
