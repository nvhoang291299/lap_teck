import PaypalComponent from "./PaypalComponent";

function OrderDetails() {
    return (
        <>
            <div className="section-title text-center">
                <h3 className="title">Đơn hàng</h3>
            </div>
            <div className="order-summary">
                <div className="order-col">
                    <div><strong>SẢN PHẨM</strong></div>
                    <div><strong>Tạm ước</strong></div>
                </div>
                <div className="order-products">
                    <div className="order-col">
                        <div>1x Product Name Goes Here</div>
                        <div>$980.00</div>
                    </div>
                    <div className="order-col">
                        <div>2x Product Name Goes Here</div>
                        <div>$980.00</div>
                    </div>
                </div>
                <div className="order-col">
                    <div>Vận chuyển</div>
                    <div><strong>FREE</strong></div>
                </div>
                <div className="order-col">
                    <div><strong>Tạm ước</strong></div>
                    <div><strong className="order-total">$2940.00</strong></div>
                </div>
            </div>
            <div className="payment-method">
                <div className="input-radio">
                    <input type="radio" name="payment" id="payment-1" />
                    <label for="payment-1">
                        <span></span>
                        Trả trực tiếp
                    </label>
                    <div className="caption">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                {/* <div className="input-radio">
                    <input type="radio" name="payment" id="payment-2" />
                    <label for="payment-2">
                        <span></span>
                        Cheque Payment
                    </label>
                    <div className="caption">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div> */}
                <div className="input-radio">
                    <input type="radio" name="payment" id="payment-3" />
                    <label for="payment-3">
                        <span></span>
                        Thanh toán bằng Paypal
                    </label>
                    <div className="caption">
                        <PaypalComponent />
                    </div>
                </div>
            </div>
            <div className="input-checkbox">
                <input type="checkbox" id="terms" />
                <label for="terms">
                    <span></span>
                    I've read and accept the <a href="#">terms & conditions</a>
                </label>
            </div>
            <a href="#" className="primary-btn order-submit">Place order</a>
        </>
    )
}

export default OrderDetails;