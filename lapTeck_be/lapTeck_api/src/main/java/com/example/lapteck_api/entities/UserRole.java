package com.example.lapteck_api.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "user_role")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user_role")
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    @JsonIgnore
    private Users users;

    @ManyToOne
    @JoinColumn(name = "id_role")
    @JsonIgnore
    private Role role;

    public UserRole() {
    }

    public UserRole(int id, Users users, Role role) {
        this.id = id;
        this.users = users;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Users getUser() {
        return users;
    }

    public void setUser(Users users) {
        this.users = users;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
