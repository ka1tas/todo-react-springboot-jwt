package com.kraken.restservice.todoservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kraken.restservice.todoservice.model.Todo;

public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
	
	List<Todo> findByUsername (String username);

}
