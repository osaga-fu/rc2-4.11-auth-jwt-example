package net.jsrois.app.controllers;

import net.jsrois.app.services.DinosaurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class DinosaurController {

    private final DinosaurService dinosaurService;

    public DinosaurController(@Autowired DinosaurService dinosaurService) {
        this.dinosaurService = dinosaurService;
    }

    @GetMapping("/api/dinosaurs")
    public List<DinosaurResponse> getAllDinosaurs() {
        return dinosaurService.getAllDinosaurs()
                .stream()
                .map( d -> new DinosaurResponse(d.getName()))
                .collect(Collectors.toList());
    }
}
