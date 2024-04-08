package net.jsrois.app.services;

import net.jsrois.app.persistence.dinosaur.Dinosaur;
import net.jsrois.app.persistence.dinosaur.DinosaurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DinosaurService {
    private final DinosaurRepository dinosaurRepository;

    public DinosaurService(@Autowired DinosaurRepository dinosaurRepository) {
        this.dinosaurRepository = dinosaurRepository;
    }

    public List<Dinosaur> getAllDinosaurs() {
        return dinosaurRepository.findAll();
    }
}
