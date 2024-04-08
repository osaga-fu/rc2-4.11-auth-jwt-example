package net.jsrois.app.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class GreetingController {
    @GetMapping("/welcome")
    public String index() {
        return "Welcome to Cretaceous Park.";
    }
}
