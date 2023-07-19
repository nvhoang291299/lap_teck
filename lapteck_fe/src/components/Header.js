import { useState } from 'react';

function Header() {

    const [isActive, setIsActive] = useState();

    // // // Mobile Nav toggle
	// $('.menu-toggle > a').on('click', function (e) {
	// 	e.preventDefault();
	// 	$('#responsive-nav').toggleClass('active');
	// })
	// // Fix cart dropdown from closing
	// $('.cart-dropdown').on('click', function (e) {
	// 	e.stopPropagation();
	// });

    const handleClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    return (
        <>
            <header>
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><a href="#"><i className="fa-solid fa-phone"></i> 0988-765-431</a></li>
						<li><a href="#"><i className="fa-solid fa-envelope"></i> hoang@email.com</a></li>
						<li><a href="#"><i className="fa-solid fa-location-dot"></i> Sơn Trà, Đà Nẵng</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li></li>
					</ul>
				</div>
			</div>
			<div id="header">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-12">
							<div className="header-logo">
								<a href="#" className="logo">
									<img src="./img/logo.png" alt=""/>
								</a>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="header-search">
								<form>
                                {/* style="border-radius: 50px 0px 0 50px;" */}
									<input className="input" placeholder="Tìm kiếm sản phẩm..."/>
									<button className="search-btn"><i className="fa fa-search"></i></button>
								</form>
							</div>
						</div>
						<div className="col-lg-3 clearfix col-md-12">
							<div className="header-ctn">
								{/* <div>
									<a href="#">
                                        <i class="fa-solid fa-heart"></i>
                                        <span>Yêu thích</span>
										<div className="qty">2</div>
									</a>
								</div> */}
								<div className="dropdown">
									<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <span>Giỏ hàng</span>
										<div className="qty">3</div>
									</a>
									<div className="cart-dropdown">
										<div className="cart-list">
											<div className="product-widget">
												<div className="product-img">
													<img src="./img/product01.png" alt=""/>
												</div>
												<div className="product-body">
													<h3 className="product-name"><a href="#">product name goes here</a></h3>
													<h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
												</div>
												<button className="delete"><i className="fa fa-close"></i></button>
											</div>

											<div className="product-widget">
												<div className="product-img">
													<img src="./img/product02.png" alt=""/>
												</div>
												<div className="product-body">
													<h3 className="product-name"><a href="#">product name goes here</a></h3>
													<h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
												</div>
												<button className="delete"><i className="fa fa-close"></i></button>
											</div>
										</div>
										<div className="cart-summary">
											<small>3 Item(s) selected</small>
											<h5>SUBTOTAL: $2940.00</h5>
										</div>
										<div className="cart-btns">
											<a href="#">Chi tiết giỏ hàng</a>
											<a href="#">Thanh toán <i className="fa fa-arrow-circle-right"></i></a>
										</div>
									</div>
								</div>
                                <div>
                                    <a href="#">
                                        <i class="fa-solid fa-user"></i>
                                        <span>Tài khoản</span>
                                        </a>
                                </div>
								<div className="menu-toggle" onClick={handleClick}>
										<a href=""><i className="fa fa-bars"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
        <nav id="navigation">
			<div className="container">
				<div id="responsive-nav" className={isActive ? 'active' : ''}>
					<ul className="main-nav navbar">
						<li className="active"><a href="#">Home</a></li>
						<li><a href="#">Hot Deals</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Laptops</a></li>
						<li><a href="#">Smartphones</a></li>
						<li><a href="#">Cameras</a></li>
						<li><a href="#">Accessories</a></li>
					</ul>
				</div>
			</div>
		</nav>
        </>
        
    )
}

export default Header;