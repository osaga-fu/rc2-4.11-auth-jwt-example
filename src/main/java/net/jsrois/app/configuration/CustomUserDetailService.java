package net.jsrois.app.configuration;

import net.jsrois.app.persistence.user.User;
import net.jsrois.app.persistence.user.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List<User> results = repository.findByName(username);
        if (results.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }
        User member = results.get(0);

        return new CustomUserDetails(member);

    }

}