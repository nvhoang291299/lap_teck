package com.example.lapteck_api.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cart")
    private int id;

    @OneToMany(mappedBy = "cart")
    private List<IndexCart> indexCarts;

    @OneToOne
    @JoinColumn(name = "id_user")
    private Users user;

    public Cart() {
    }

    public Cart(int id, List<IndexCart> indexCarts, Users user) {
        this.id = id;
        this.indexCarts = indexCarts;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<IndexCart> getIndexCarts() {
        return indexCarts;
    }

    public void setIndexCarts(List<IndexCart> indexCarts) {
        this.indexCarts = indexCarts;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
