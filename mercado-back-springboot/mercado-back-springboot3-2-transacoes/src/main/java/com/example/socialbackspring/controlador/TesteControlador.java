package com.example.socialbackspring.controlador;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TesteControlador {

    @GetMapping("/status")
    public String status() {
        return "Spring Boot está rodando!";
    }
}
