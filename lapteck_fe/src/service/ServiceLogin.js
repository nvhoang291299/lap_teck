import axios from 'axios';
import { toast } from 'react-toastify';

export const postLogin = async (request) => {
    const res = await axios.post("http://localhost:8080/auth/login", request);
    return res.data;
}

export const logout = () => {
    sessionStorage.removeItem('ROLES')
    sessionStorage.removeItem('EMAIL')
    sessionStorage.removeItem('TOKEN')
    toast.success("đăng xuất thành công")
    window.location.href = '/';
}