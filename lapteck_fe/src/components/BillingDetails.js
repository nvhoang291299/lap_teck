function BillingDeTails() {
    return (
        <div className="billing-details">
            <div className="section-title">
                <h3 className="title">Thông tin đặt hàng</h3>
            </div>
            <div className="form-group">
                <input
                    className="input my-2"
                    type="text"
                    name="first-name"
                    placeholder="Họ và tên"
                />
                <input
                    className="input my-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    className="input my-2"
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                />
                <input className="input my-2" type="text" name="city" placeholder="Thành phố" />
                <input
                    className="input my-2"
                    type="tel"
                    name="tel"
                    placeholder="Số điện thoại"
                />
                <div className="input-checkbox">
                    <input type="checkbox" id="create-account" />
                    <label for="create-account">
                        <span></span>
                        Tạo tài khoản?
                    </label>
                    <div className="caption">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt.
                        </p>
                        <input
                            className="input"
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingDeTails;