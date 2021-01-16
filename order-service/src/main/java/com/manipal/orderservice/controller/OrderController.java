package com.manipal.orderservice.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

@RestController
public class OrderController {

	@Autowired
	private RestTemplate restTemplate;
	
	@GetMapping("/orders")
//	@HystrixCommand(fallbackMethod = "getDummyOrders", commandProperties = {
//			@HystrixProperty(name="execution.isolation.thread.timeoutMilliseconds",value="2000"),
//			@HystrixProperty(name="circuitBreaker.requestVolumeThershold",value="5"),
//			@HystrixProperty(name="circuitBreaker.errorThersholdPercentage",value="60"),
//			@HystrixProperty(name="circuitBreaker.sleeWindowInMilliseconds",value="50000")
//	},
//	threadPoolKey = "ordersKey",
//	
//			threadPoolProperties = {
//					@HystrixProperty(name="coreSize",value="10"),
//					@HystrixProperty(name="maxQueueSize",value="5"),
//			})
	public Map<String,List<Product>> getOrderDetails()
	{
		Map<String,List<Product>> orderDetails= new HashMap<String, List<Product>>() ;
		
		List<Product> customerProducts=restTemplate.getForObject("http://products-service/products", List.class);
		
		orderDetails.put("Akshay", customerProducts);
		
		return orderDetails;
		
	}
	
	public Map<String,List<Product>> getDummyOrders()
	{
		Map<String,List<Product>> orderDetails= new HashMap<String, List<Product>>() ;
		
		List<Product> customerProducts=new ArrayList<Product>();
		orderDetails.put("Akshay", customerProducts);
		
		return orderDetails;
		
	}
	
	
}
