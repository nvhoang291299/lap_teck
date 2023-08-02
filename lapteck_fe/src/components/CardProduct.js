import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { addCart } from '../service/user/serviceCart';
import {Link} from "react-router-dom";



function CardProduct(props) {
    const { laptop } = props;
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState("");


    useEffect(() => {
        setIsAuthenticated(JSON.parse(sessionStorage.getItem('status')));
        setEmail(sessionStorage.getItem('EMAIL'))
    },[])

    function handleAddToCart(idLaptop) {
        addCart(idLaptop, email)
        .then(() => {
            toast.success("thêm vào giỏ hàng thành công")
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return (
        <div className="col-md-4 col-xs-6">
            <Link to={`/laptop/${laptop.id}`}>
                <div className="product">
                    <div className="product-img">
                        <img src={laptop.image} />
                        <div className="product-label">
                            <span className="sale">-30%</span>
                            {/* <span className="new">NEW</span> */}
                        </div>
                    </div>
                    <div className="product-body">
                        <h3 className="product-name"><a href="#">{laptop.nameProduct}</a></h3>
                        <h4 className="product-price">{laptop.price.toLocaleString("de-DE")}</h4>
                        <button className="add-to-cart-btn" onClick={() => {
                            if (isAuthenticated) {
                                handleAddToCart(laptop.id);
                                console.log(isAuthenticated);
                            } else {
                                toast.warn("bạn cần đăng nhập để thêm vào giỏ")
                            }
                        }} ><i className="fa fa-shopping-cart"/> Thêm giỏ hàng</button>
                    </div>
                </div>
            </Link>
            
        </div>

    )


}

export default CardProduct;