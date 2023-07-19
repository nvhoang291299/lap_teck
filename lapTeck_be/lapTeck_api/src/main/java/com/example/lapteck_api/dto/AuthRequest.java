package com.example.lapteck_api.dto;

import javax.validation.constraints.NotNull;

public class AuthRequest {
    @NotNull(message = "Trường này không được để trống")
    private String email;

    @NotNull(message = "Trường này không được để trống")
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
