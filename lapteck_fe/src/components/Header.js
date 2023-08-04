import { useState } from 'react';
import logo from '../image/logo.png';
import Login from './Login';
import { Link, NavLink } from 'react-router-dom';

function Header() {

	const [isActive, setIsActive] = useState();

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
					</div>
				</div>
				<div id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-12">
								<div className="header-logo">
									<a href="#" className="logo">
										<img src={logo} alt="" />
									</a>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="header-search">
									<form>

										<input className="input" placeholder="Tìm kiếm sản phẩm..." style={{ borderRadius: " 50px 0px 0px 50px" }} />
										<button className="search-btn"><i className="fa fa-search"></i></button>
									</form>
								</div>
							</div>
							<div className="col-lg-3 clearfix col-md-12">
								<div className="header-ctn">
									<div>
										<Link to="/cart">
											<i className="fa-solid fa-cart-shopping"></i>
											<span>Giỏ hàng</span>
											<div className="qty">3</div>
										</Link>
									</div>
									<div className="dropdown">
										<a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fa-solid fa-user"></i>
											<span>Tài khoản</span>
										</a>
										
										{sessionStorage.getItem("ROLES") === "ROLE_ADMIN" && (
                        				<>
											<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
												<li><Link className="dropdown-item my-2" to="#">
													<i className="fa-solid fa-circle-user me-2"></i> Quản lý</Link></li>
												<li><NavLink className="dropdown-item" to="#">
												<i className="fa-solid fa-right-from-bracket me-2"></i> Đăng xuất</NavLink></li>
											</ul>
										</>)}
										{sessionStorage.getItem("ROLES") === "ROLE_USER" && (
                        				<>
											<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
												<li><NavLink className="dropdown-item my-2" to="/info">
													<i className="fa-solid fa-circle-user me-2"></i> Thông tin cá nhân</NavLink></li>
												<li><NavLink className="dropdown-item" to="#">
												<i className="fa-solid fa-right-from-bracket me-2"></i> Đăng xuất</NavLink></li>
											</ul>
										</>)}
										{!sessionStorage.getItem("ROLES") && (
											<>
												<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
													<li className="my-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><NavLink className="dropdown-item" to="#">
													<i className="fa-solid fa-arrow-right-from-bracket me-2"></i> Đăng nhập</NavLink></li>
												</ul>
											</>
										)}
										<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											<div className="modal-dialog">
												<div className="modal-content">
													<div className="modal-header">
														<h5 className="modal-title" id="exampleModalLabel">Đăng nhập</h5>
														<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
													</div>
													<div className="modal-body">
														<Login />
													</div>
												</div>
											</div>
										</div>
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
							<li><NavLink to="/">Trang chủ</NavLink></li>
							<li><NavLink to="/products">Sản phẩm</NavLink></li>
							<li><a href="#">Khuyến mãi</a></li>
							<li><a href="#">Giới thiệu</a></li>
							<li><a href="#">Tin tức</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</>

	)
}

export default Header;