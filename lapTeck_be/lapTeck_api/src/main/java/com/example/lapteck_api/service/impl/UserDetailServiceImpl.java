package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.config.MyUserPrincipal;
import com.example.lapteck_api.entities.UserRole;
import com.example.lapteck_api.entities.Users;
import com.example.lapteck_api.repository.IUserRepository;
import com.example.lapteck_api.repository.IUserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private IUserRoleRepository userRoleRepository;

    @Autowired
    private IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = this.userRepository.findByEmail(username);
        if (users == null) {
            System.out.println("User not found! " + username);
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }
        List<UserRole> userRoles = this.userRoleRepository.findByUsers(users);
        List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
        if (userRoles != null) {
            for (UserRole userRole : userRoles) {
                // ROLE_USER, ROLE_ADMIN,..
                GrantedAuthority authority = new SimpleGrantedAuthority(userRole.getRole().getNameRole());
                grantList.add(authority);
            }
        }

        return new MyUserPrincipal(grantList, users.getId(), users.getEmail(), users.getPassword());
    }
}
