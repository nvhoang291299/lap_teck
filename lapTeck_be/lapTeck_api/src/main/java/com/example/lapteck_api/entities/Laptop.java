package com.example.lapteck_api.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "laptop")
public class Laptop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_laptop")
    private int id;

    @Column(name = "cpu")
    private String cpu;

    @Column(name = "price")
    private int price;

    @Column(name = "quantity_storage")
    private String quantityStorage;

    @Column(name = "battery")
    private String battery;

    @Column(name = "operation_system")
    private String oSystem;

    @Column(name = "screen")
    private String screen;

    @Column(name = "ram")
    private String ram;

    @Column(name = "name_laptop")
    private String nameProduct;

    @Column(name = "design")
    private String design;

    @Column(name = "warranty")
    private String warranty;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    @ManyToOne
    @JoinColumn(name = "id_category")
    @JsonIgnore
    private Category category;

    @ManyToOne
    @JoinColumn(name = "id_mft")
    @JsonIgnore
    private Manufacturer manufacturer;

    @OneToMany(mappedBy = "laptop")
    private List<OrderDetail> orderDetails;

    @OneToMany(mappedBy = "laptop")
    @JsonIgnore
    private List<IndexCart> indexCarts;

    public Laptop() {
    }

    public Laptop(int id, String cpu, int price, String quantityStorage, String battery,
                  String oSystem, String screen, String ram, String nameProduct, String design,
                  String warranty, String description, String image, Category category,
                  Manufacturer manufacturer, List<OrderDetail> orderDetails) {
        this.id = id;
        this.cpu = cpu;
        this.price = price;
        this.quantityStorage = quantityStorage;
        this.battery = battery;
        this.oSystem = oSystem;
        this.screen = screen;
        this.ram = ram;
        this.nameProduct = nameProduct;
        this.design = design;
        this.warranty = warranty;
        this.description = description;
        this.image = image;
        this.category = category;
        this.manufacturer = manufacturer;
        this.orderDetails = orderDetails;
    }

    public Laptop(int id, String cpu, int price, String quantityStorage, String battery,
                  String oSystem, String screen, String ram, String nameProduct, String design,
                  String warranty, String description, String image, Category category,
                  Manufacturer manufacturer, List<OrderDetail> orderDetails, List<IndexCart> indexCarts) {
        this.id = id;
        this.cpu = cpu;
        this.price = price;
        this.quantityStorage = quantityStorage;
        this.battery = battery;
        this.oSystem = oSystem;
        this.screen = screen;
        this.ram = ram;
        this.nameProduct = nameProduct;
        this.design = design;
        this.warranty = warranty;
        this.description = description;
        this.image = image;
        this.category = category;
        this.manufacturer = manufacturer;
        this.orderDetails = orderDetails;
        this.indexCarts = indexCarts;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getQuantityStorage() {
        return quantityStorage;
    }

    public void setQuantityStorage(String quantityStorage) {
        this.quantityStorage = quantityStorage;
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

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDesign() {
        return design;
    }

    public void setDesign(String design) {
        this.design = design;
    }

    public String getWarranty() {
        return warranty;
    }

    public void setWarranty(String warranty) {
        this.warranty = warranty;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public List<IndexCart> getIndexCarts() {
        return indexCarts;
    }

    public void setIndexCarts(List<IndexCart> indexCarts) {
        this.indexCarts = indexCarts;
    }
}
