package com.example.isprojectjava.service;

import com.example.isprojectjava.exception.InvalidEmailException;
import com.example.isprojectjava.exception.RoleNotFoundException;
import com.example.isprojectjava.exception.UserNotFoundException;
import com.example.isprojectjava.model.Role;
import com.example.isprojectjava.model.User;
import com.example.isprojectjava.repository.RoleRepository;
import com.example.isprojectjava.repository.UserRepository;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service(value = "userService")
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
        });
        return authorities;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findSingleUser(String username){
        return userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
    }

    @Transactional
    public User saveUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        if (!EmailValidator.getInstance().isValid(user.getUsername())){
            throw new InvalidEmailException(user.getUsername());
        }

        userRepository.save(user);

        Role role = roleRepository.findByName("USER").orElseThrow(RoleNotFoundException::new);
        Set<Role> roles = new HashSet<>();
        roles.add(role);

        if (user.getUsername().split("@")[1].equals("admin.edu")){
            role = roleRepository.findByName("MANAGER").orElseThrow(RoleNotFoundException::new);
            roles.add(role);
            role = roleRepository.findByName("ADMIN").orElseThrow(RoleNotFoundException::new);
            roles.add(role);
        }
        if (user.getUsername().split("@")[1].equals("manager.edu")){
            role = roleRepository.findByName("MANAGER").orElseThrow(RoleNotFoundException::new);
            roles.add(role);
        }

        user.addRoles(roles);

        return user;
    }
}
