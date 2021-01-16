package demo;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Encry {

	
	public static void main(String args[])
	{
		BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();
		String str=bcrypt.encode("raj@12");
		System.out.println(str);
	}
}
