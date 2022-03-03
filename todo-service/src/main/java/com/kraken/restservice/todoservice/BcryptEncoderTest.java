package com.kraken.restservice.todoservice;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		
		BCryptPasswordEncoder passEncoder = new BCryptPasswordEncoder();
		
		for(int i =1; i<=10; i++) {
		String encodedPassword = passEncoder.encode("pass");
		System.out.println(encodedPassword);
		}
		// TODO Auto-generated method stub

	}

}
