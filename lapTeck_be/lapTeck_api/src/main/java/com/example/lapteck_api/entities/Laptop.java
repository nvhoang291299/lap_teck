package com.example.lapteck_api.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "laptop")
public class Laptop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_laptop")
    private int id;

    @Column(name = "name_laptop")
    private String nameProduct;

    @Column(name = "cpu")
    private String cpu;

    @Column(name = "price")
    private int price;

    @Column(name = "battery")
    private String battery;

    @Column(name = "operation_system")
    private String oSystem;

    @Column(name = "screen")
    private String screen;

    @Column(name = "ram")
    private String ram;

    @Column(name = "quantity")
    private String quantityStorage;

    @Column(name = "description")
    private String description;

    @Column(name = "weight")
    private String weight;

    @Column(name = "card")
    private String card;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "id_mft")
    private Manufacturer manufacturer;

    @OneToMany(mappedBy = "laptop")
    private List<OrderDetail> orderDetails;

    public Laptop() {
    }

    public Laptop(int id, String nameProduct, String cpu, int price,
                  String battery, String oSystem, String screen,
                  String ram, String quantityStorage, String description,
                  String weight, String card, Category category,
                  Manufacturer manufacturer, List<OrderDetail> orderDetails) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.cpu = cpu;
        this.price = price;
        this.battery = battery;
        this.oSystem = oSystem;
        this.screen = screen;
        this.ram = ram;
        this.quantityStorage = quantityStorage;
        this.description = description;
        this.weight = weight;
        this.card = card;
        this.category = category;
        this.manufacturer = manufacturer;
        this.orderDetails = orderDetails;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getBattery() {
        return battery;
    }

    public void setBattery(String battery) {
        this.battery = battery;
    }

    public String getoSystem() {
        return oSystem;
    }

    public void setoSystem(String oSystem) {
        this.oSystem = oSystem;
    }

    public String getScreen() {
        return screen;
    }

    public void setScreen(String screen) {
        this.screen = screen;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getQuantityStorage() {
        return quantityStorage;
    }

    public void setQuantityStorage(String quantityStorage) {
        this.quantityStorage = quantityStorage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }
}
