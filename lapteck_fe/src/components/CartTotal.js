import { Link } from "react-router-dom";

function CartTotal() {
    return (
        <div className="col-12 mt-5 cart-wrap ftco-animate">
            <div className="cart-total mb-3">
                <h3>Tổng tiền tạm tính</h3>
                <p className="d-flex">
                    <span>Tổng tiền:</span>
                    <span>$20.60</span>
                </p>
                <p className="d-flex">
                    <span>Phí vận chuyển:</span>
                    <span>$0.00</span>
                </p>
                <p className="d-flex">
                    <span>Giảm giá:</span>
                    <span>$3.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                    <span>Tổng</span>
                    <span>$17.60</span>
                </p>
            </div>
            <p className="text-center"><Link to="/checkout" className="btn btn-danger py-3 px-4">Thanh toán</Link></p>
        </div>
    )
}

export default CartTotal;