import BillingDeTails from "../../components/BillingDetails";
import OrderDetails from "../../components/OrderDetails";
import ShipingDetails from "../../components/ShipingDetails";

function Checkout() {
    return(
        <>
            <div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="breadcrumb-header">Thanh toán</h3>
						<ul className="breadcrumb-tree">
							<li><a href="#">Trang chủ</a></li>
							<li className="active">Thanh toán</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<BillingDeTails />
						<ShipingDetails />
					</div>
					<div className="col-md-5 order-details">
						<OrderDetails />
					</div>
				</div>
			</div>
		</div>          
        </>
    )
}

export default Checkout;