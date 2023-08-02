package com.example.lapteck_api.entities;

import javax.persistence.*;

@Entity
@Table(name="index_cart")
public class IndexCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ic")
    private int id;

    @Column(name = "quantity_cart")
    private int quantity;

    @Column(name = "total")
    private long total;

    @ManyToOne
    @JoinColumn(name = "id_laptop")
    private Laptop laptop;

    @ManyToOne
    @JoinColumn(name = "id_cart")
    private Cart cart;

    public IndexCart() {
    }

    public IndexCart(int quantity, long total, Laptop laptop, Cart cart) {
        this.quantity = quantity;
        this.total = total;
        this.laptop = laptop;
        this.cart = cart;
    }

    public IndexCart(int id, int quantity, long total, Laptop laptop, Cart cart) {
        this.id = id;
        this.quantity = quantity;
        this.total = total;
        this.laptop = laptop;
        this.cart = cart;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public Laptop getLaptop() {
        return laptop;
    }

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }
}
