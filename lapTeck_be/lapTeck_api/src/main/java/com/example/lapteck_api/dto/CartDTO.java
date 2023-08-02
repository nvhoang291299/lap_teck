package com.example.lapteck_api.dto;

public class CartDTO {
    private int id;
    private String image;
    private String nameLaptop;
    private int quantity;

    private long totalPrice;

    public CartDTO() {
    }

    public CartDTO(int id, String image, String nameLaptop, int quantity, long totalPrice) {
        this.id = id;
        this.image = image;
        this.nameLaptop = nameLaptop;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getNameLaptop() {
        return nameLaptop;
    }

    public void setNameLaptop(String nameLaptop) {
        this.nameLaptop = nameLaptop;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public long getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(long totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
