import { Link } from "react-router-dom";
import { useState } from "react";

function CartTotal(props) {
    const {carts} = props;
    const [totals, setTotals] = useState();

    const getTotal = () => {
        let total = carts && carts.reduce((cur, cart) => (
            cur + cart.totalPrice
        ),0);
        sessionStorage.setItem('total', total);
        return total;
    }
    // getTotal();

    // console.log(totals);

    return (
        <div className="col-12 mt-5 cart-wrap ftco-animate">
            <div className="cart-total mb-3">
                <h3>Tổng tiền tạm tính</h3>
                <p className="d-flex">
                    <span className="me-2">Tổng tiền:</span>
                    <span>{getTotal()?.toLocaleString("de-DE")} VND</span>
                </p>
                <p className="d-flex">
                    <span className="me-2">Phí vận chuyển:</span>
                    <span>0 VND</span>
                </p>
                <p className="d-flex">
                    <span className="me-2">Giảm giá:</span>
                    <span>0 VND</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                    <span className="me-2">Tổng</span>
                    <span>{getTotal()?.toLocaleString("de-DE")} VND</span>
                </p>
            </div>
            <p className="text-center"><Link to="/checkout" className="btn btn-danger py-3 px-4">Thanh toán</Link></p>
        </div>
    )
}

export default CartTotal;