import axios from "axios";
import authHeader from '../auth-header';

export const getCarts = async () => {
    const res = await axios.get(`http://localhost:8080/cart?email=${sessionStorage.getItem('EMAIL')}`, { header: authHeader() });
    return res.data;
}

export const addCart = async (idLaptop, email) => {
    const res = await axios.post(`http://localhost:8080/add-cart?idLaptop=${idLaptop}&email=${email}`, { headers: authHeader() });
    return res;
}

export const delCart = async (idIndexCart) => {
    const res = await axios.delete(`http://localhost:8080/delete-cart?idDel=${idIndexCart}`, { headers: authHeader() });
    return res;
}