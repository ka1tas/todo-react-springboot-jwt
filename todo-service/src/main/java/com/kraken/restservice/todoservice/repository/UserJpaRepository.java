package com.kraken.restservice.todoservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kraken.restservice.todoservice.model.User;

public interface UserJpaRepository extends JpaRepository<User , Integer> {

}
