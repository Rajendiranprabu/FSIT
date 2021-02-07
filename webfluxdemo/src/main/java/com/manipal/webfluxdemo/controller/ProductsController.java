package com.manipal.webfluxdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.manipal.webfluxdemo.model.Products;
import com.manipal.webfluxdemo.repository.ProductRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/products")
public class ProductsController {
	
	private ResponseEntity defaultV=ResponseEntity.notFound().build();
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping
	public Flux<Products> getProducts()
	{
		return productRepository.findAll();
	}
	
	@PostMapping
	public Mono<Products> addProduct(@RequestBody Products product)
	{
		return productRepository.save(product);
	}
	
	@GetMapping("/{id}")
	public Mono<ResponseEntity> getProductsById(@PathVariable int id)
	{
		return productRepository.findById(id)
				.map(product->new ResponseEntity<Products>(product,HttpStatus.OK))
				.defaultIfEmpty(defaultV);
	}
	
	@PutMapping("/{id}")
	public Mono<ResponseEntity> updateProduct(@RequestBody Products product,@PathVariable int id)
	{
		return productRepository.findById(id).flatMap(curProducts->
		{
			curProducts.setQuantity(product.getQuantity());
			curProducts.setPrice(product.getPrice());
			return productRepository.save(curProducts);
		}).map(mapProducts-> new ResponseEntity<Products>(mapProducts,HttpStatus.OK)).defaultIfEmpty(defaultV);
	}

}
