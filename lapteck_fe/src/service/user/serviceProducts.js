import axios from 'axios';

export const getList = async (page) => {
    const res = await axios.get(`http://localhost:8080/laptop?page=0`);
    return res.data.content;
}

export const getDetail = async (id) => {
    const res = await axios.get(`http://localhost:8080/detail/${id}`);
    return res.data; 
}