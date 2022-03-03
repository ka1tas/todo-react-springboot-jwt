package com.kraken.restservice.todoservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kraken.restservice.todoservice.model.Authentication;
import com.kraken.restservice.todoservice.model.Todo;
import com.kraken.restservice.todoservice.model.User;
import com.kraken.restservice.todoservice.service.BasicAuthenticationService;

@RestController
@CrossOrigin
public class BasicAuthenticationController {
	
	@Autowired
	private BasicAuthenticationService authService;

	@GetMapping("/basicauth")
	public Authentication getAuthenticated() {
		
		return new Authentication("Your login has been authenticated.");
			
	}
	
	@PostMapping("/signup")
	public User createUser(@RequestBody User user) {
		
		return authService.createUser(user);
			
	}


}
