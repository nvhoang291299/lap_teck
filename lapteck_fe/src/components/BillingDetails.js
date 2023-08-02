function BillingDeTails() {
    return (
        <div className="billing-details">
            <div className="section-title">
                <h3 className="title">Billing address</h3>
            </div>
            <div className="form-group">
                <input
                    className="input"
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                />
            </div>
            <div className="form-group">
                <input
                    className="input"
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                />
            </div>
            <div className="form-group">
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
            </div>
            <div className="form-group">
                <input
                    className="input"
                    type="text"
                    name="address"
                    placeholder="Address"
                />
            </div>
            <div className="form-group">
                <input className="input" type="text" name="city" placeholder="City" />
            </div>
            <div className="form-group">
                <input
                    className="input"
                    type="text"
                    name="country"
                    placeholder="Country"
                />
            </div>
            <div className="form-group">
                <input
                    className="input"
                    type="text"
                    name="zip-code"
                    placeholder="ZIP Code"
                />
            </div>
            <div className="form-group">
                <input
                    className="input"
                    type="tel"
                    name="tel"
                    placeholder="Telephone"
                />
            </div>
            <div className="form-group">
                <div className="input-checkbox">
                    <input type="checkbox" id="create-account" />
                    <label for="create-account">
                        <span></span>
                        Create Account?
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