package com.example.lapteck_api.controller;

import com.example.lapteck_api.config.MyUserPrincipal;
import com.example.lapteck_api.dto.AuthRequest;
import com.example.lapteck_api.dto.AuthResponse;
import com.example.lapteck_api.utils.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@CrossOrigin
@RestController
public class LoginController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenUtil jwtUtil;

    @PostMapping(value = "/auth/login")
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request) {
        String errorMessages = "Tài khoản hoặc mật khẩu của bạn không đúng";
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(), request.getPassword())
            );

            MyUserPrincipal account = (MyUserPrincipal) authentication.getPrincipal();
            String accessToken = jwtUtil.generateAccessToken(account);
            AuthResponse response = new AuthResponse(account.getUsername(), account.getAuthorities(), accessToken);

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
        }
    }

}
