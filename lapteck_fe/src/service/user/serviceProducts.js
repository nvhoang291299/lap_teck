import axios from 'axios';

export const getList = async (page, size) => {
    const res = await axios.get(`http://localhost:8080/laptop?page=${page}${size ? `&size=${size}` : ''}`);
    return res.data;
}

export const getDetail = async (id) => {
    const res = await axios.get(`http://localhost:8080/detail/${id}`);
    return res.data; 
}

export const getTopProduct = async () => {
    const res = await axios.get(`http://localhost:8080/expensive`);
    return res.data;
}

export const getListByNameProduct = async (nameLaptop) => {
    console.log(nameLaptop);
    const res = await axios.get(`http://localhost:8080/search-laptop?nameLaptop=${nameLaptop}`);
    return res.data;
}