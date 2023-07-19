package com.example.lapteck_api.config;

import com.example.lapteck_api.service.impl.UserDetailServiceImpl;
import com.example.lapteck_api.utils.JwtTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;


@EnableWebSecurity
public class WebSercurityConfig extends WebSecurityConfigurerAdapter {

    AppConfig appConfig = new AppConfig();

    @Autowired
    private JwtTokenFilter jwtTokenFilter;

    @Autowired
    private UserDetailServiceImpl userDetailServiceImpl;


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailServiceImpl).passwordEncoder(appConfig.passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable().cors();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.authorizeRequests().antMatchers("/auth/login",
                        "/api/feedbacks/create-feedback","/ListBillDetail",
                        "/topProduct", "/newProduct", "/menu", "/menu/*", "/news/list").permitAll()
                .and().authorizeRequests().antMatchers("/api/admin/*").hasAnyRole("ADMIN")
                .and().authorizeRequests().antMatchers("/api/feedbacks/*").hasAnyRole("ADMIN")
                .and().authorizeRequests()
                .anyRequest().authenticated();

        http.exceptionHandling()
                .authenticationEntryPoint(
                        (request, response, ex) -> {
                            response.sendError(
                                    HttpServletResponse.SC_UNAUTHORIZED,
                                    ex.getMessage()
                            );
                        }
                )
                .accessDeniedPage("/403");

        http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
