package com.example.lapteck_api.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order")
    private int id;

    @Column(name = "address")
    private String address;

    @Column(name = "name_customer")
    private String nameCustomer;

    @Column(name = "number_phone")
    private String numberPhone;

    @Column(name = "note")
    private String note;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private Users users;

    @OneToMany(mappedBy = "order")
    private List<OrderDetail> orderDetails;

    public Order() {
    }

    public Order(int id, String address, String nameCustomer, String numberPhone,
                 String note, Users users, List<OrderDetail> orderDetails) {
        this.id = id;
        this.address = address;
        this.nameCustomer = nameCustomer;
        this.numberPhone = numberPhone;
        this.note = note;
        this.users = users;
        this.orderDetails = orderDetails;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getNumberPhone() {
        return numberPhone;
    }

    public void setNumberPhone(String numberPhone) {
        this.numberPhone = numberPhone;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Users getUser() {
        return users;
    }

    public void setUser(Users users) {
        this.users = users;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }
}
