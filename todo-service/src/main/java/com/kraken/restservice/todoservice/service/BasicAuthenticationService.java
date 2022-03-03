package com.kraken.restservice.todoservice.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kraken.restservice.todoservice.model.User;
import com.kraken.restservice.todoservice.repository.UserJpaRepository;

@Service
public class BasicAuthenticationService {
	
	@Autowired
	private UserJpaRepository userJpaRepository;
	
	@Transactional
	public User createUser(User user) {
		return userJpaRepository.save(user);
	}

}
