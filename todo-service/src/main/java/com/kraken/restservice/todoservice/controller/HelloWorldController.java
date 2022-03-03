package com.kraken.restservice.todoservice.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kraken.restservice.todoservice.model.HelloWorldBean;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorldController {

	// @RequestMapping(method=RequestMethod.GET, path="/hello")
	@GetMapping("/hello")
	public String helloWorld() {
		return "Hello World! Hello World!";
	}

	@GetMapping("/hello-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World from the outside!");
	}

	@GetMapping("/hello-bean/{pathvariable}")
	public HelloWorldBean helloWorldBean(@PathVariable String pathvariable) {
		return new HelloWorldBean(String.format("Hello , " + pathvariable + ". "));
	}
}
