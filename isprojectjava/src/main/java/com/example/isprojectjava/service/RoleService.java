package com.example.isprojectjava.service;

import com.example.isprojectjava.exception.RoleNotFoundException;
import com.example.isprojectjava.model.Role;
import com.example.isprojectjava.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public Role findByName(String name){
        return roleRepository.findByName(name).orElseThrow(RoleNotFoundException::new);
    }

}
