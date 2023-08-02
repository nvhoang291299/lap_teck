package com.example.lapteck_api.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "unit_price")
    private String unitPrice;

    @Column(name = "quantity")
    private int quantityOrder;


    @ManyToOne
    @JoinColumn(name = "id_laptop")
    @JsonIgnore
    private Laptop laptop;

    @ManyToOne
    @JoinColumn(name = "id_order")
    @JsonIgnore
    private Order order;

    public OrderDetail() {
    }

    public OrderDetail(int id, String unitPrice, int quantityOrder, Laptop laptop, Order order) {
        this.id = id;
        this.unitPrice = unitPrice;
        this.quantityOrder = quantityOrder;
        this.laptop = laptop;
        this.order = order;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(int quantityOrder) {
        this.quantityOrder = quantityOrder;
    }

    public Laptop getLaptop() {
        return laptop;
    }

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

}
