package com.example.lapteck_api.dto;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class AuthResponse {
    private String email;
    private String accessToken;

    private Collection<? extends GrantedAuthority> roles;

    public AuthResponse() { }

    public AuthResponse(String email, String accessToken) {
        this.email = email;
        this.accessToken = accessToken;
    }

    public AuthResponse(String username, Collection<? extends GrantedAuthority> authorities, String accessToken) {
        this.email = username;
        this.accessToken = accessToken;
        this.roles = authorities;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }
}
