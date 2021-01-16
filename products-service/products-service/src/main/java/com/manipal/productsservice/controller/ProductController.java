package com.manipal.productsservice.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manipal.productsservice.model.Product;

@RestController
public class ProductController {

	@GetMapping("/products")
	public List<Product> getProducts()
	{
		List<Product> l=new ArrayList<Product>();
		
		l.add(new Product(101,"Samsung Mobile",10));
		l.add(new Product(102,"Redmi ",10));
		l.add(new Product(103,"One Plus",10));
		l.add(new Product(104,"I Phone",10));
		return l;
	}
}
