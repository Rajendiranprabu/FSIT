package com.manipal.webfluxdemo.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.manipal.webfluxdemo.model.Products;

public interface ProductRepository extends ReactiveMongoRepository<Products,Integer> {

}
