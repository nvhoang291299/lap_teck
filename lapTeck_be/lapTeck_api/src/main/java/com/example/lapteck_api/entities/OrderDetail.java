package com.example.lapteck_api.entities;

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
    private String quantityOrder;

    @ManyToOne
    @JoinColumn(name = "id_laptop")
    private Laptop laptop;

    @ManyToOne
    @JoinColumn(name = "id_order")
    private Order order;

    public OrderDetail() {
    }

    public OrderDetail(int id, String unitPrice, String quantityOrder, Laptop laptop, Order order) {
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

    public String getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(String quantityOrder) {
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
