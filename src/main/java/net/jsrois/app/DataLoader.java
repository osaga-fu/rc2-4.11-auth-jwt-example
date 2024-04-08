package net.jsrois.app;

import jakarta.annotation.PostConstruct;
import net.jsrois.app.persistence.dinosaur.Dinosaur;
import net.jsrois.app.persistence.dinosaur.DinosaurRepository;
import net.jsrois.app.persistence.user.User;
import net.jsrois.app.persistence.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class DataLoader {

    private final DinosaurRepository dinosaurRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(@Autowired DinosaurRepository dinosaurRepository,
                      @Autowired UserRepository userRepository,
                      @Autowired PasswordEncoder passwordEncoder) {
        this.dinosaurRepository = dinosaurRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
        /// When the application starts, loads sample data in the database
    void loadDinosaurData() {
        dinosaurRepository.deleteAll();
        dinosaurRepository.saveAll(
                List.of(
                        dinosaur(1L, "Rex"),
                        dinosaur(2L, "Piecito"),
                        dinosaur(3L, "Triceratops")

                )
        );
    }

    @PostConstruct
        /// When the application starts, loads sample data in the database
    void loadUserData() {
        userRepository.deleteAll();
        userRepository.saveAll(
                List.of(
                        user(UUID.randomUUID(), "pepito", passwordEncoder.encode("12345")),
                        user(UUID.randomUUID(), "juanito", passwordEncoder.encode("54321"))
                )
        );
    }

    private User user(UUID id, String name, String password) {
        User user = new User();
        user.setId(id);
        user.setName(name);
        user.setPassword(encryptPassword(password));
        return user;
    }

    private String encryptPassword(String password) {
        return password;
    }

    private Dinosaur dinosaur(Long id, String name) {
        Dinosaur dinosaur = new Dinosaur();
        dinosaur.setId(id);
        dinosaur.setName(name);
        return dinosaur;
    }

}
