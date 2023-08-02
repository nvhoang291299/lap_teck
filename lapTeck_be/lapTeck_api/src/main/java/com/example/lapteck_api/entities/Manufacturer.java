package com.example.lapteck_api.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "manufacturer")
public class Manufacturer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mft")
    private int id;

    @Column(name = "name_mft")
    private String nameMft;

    @Column(name = "image_mft")
    private String imageMft;

    @OneToMany(mappedBy = "manufacturer")
    private List<Laptop> laptops;

    public Manufacturer() {
    }

    public Manufacturer(int id, String nameMft, List<Laptop> laptops) {
        this.id = id;
        this.nameMft = nameMft;
        this.laptops = laptops;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameMft() {
        return nameMft;
    }

    public void setNameMft(String nameMft) {
        this.nameMft = nameMft;
    }

    public List<Laptop> getLaptops() {
        return laptops;
    }

    public void setLaptops(List<Laptop> laptops) {
        this.laptops = laptops;
    }

    public String getImageMft() {
        return imageMft;
    }

    public void setImageMft(String imageMft) {
        this.imageMft = imageMft;
    }
}
