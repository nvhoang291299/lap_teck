package com.example.lapteck_api.dto;

import java.time.LocalDate;
import java.util.Date;

public class HistoryOrder {
    private String nameLaptop;
    private String image;
    private int quantity;
    private long total;
    private Date dateOrder;

    private String statusOrder;

    public HistoryOrder() {
    }

    public HistoryOrder(String nameLaptop, String image, int quantity,
                        long total, Date dateOrder, String statusOrder) {
        this.nameLaptop = nameLaptop;
        this.image = image;
        this.quantity = quantity;
        this.total = total;
        this.dateOrder = dateOrder;
        this.statusOrder = statusOrder;
    }

    public String getNameLaptop() {
        return nameLaptop;
    }

    public void setNameLaptop(String nameLaptop) {
        this.nameLaptop = nameLaptop;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public Date getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(Date dateOrder) {
        this.dateOrder = dateOrder;
    }

    public String getStatusOrder() {
        return statusOrder;
    }

    public void setStatusOrder(String statusOrder) {
        this.statusOrder = statusOrder;
    }
}
