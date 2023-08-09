function Footer() {
    return(
        <footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-6">
							<div className="footer">
								<h3 className="footer-title">Về chúng tôi</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className="footer-links">
									<li><a href="#"><i className="fa-solid fa-location-dot"></i>Sơn Trà, Đà Nẵng</a></li>
									<li><a href="#"><i className="fa fa-phone"></i>0984-879-434</a></li>
									<li><a href="#"><i className="fa-solid fa-envelope"></i>hoang@lapteck.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-6">
							<div className="footer">
								<h3 className="footer-title">Thể loại</h3>
								<ul className="footer-links">
									<li><a href="#">Văn phòng</a></li>
									<li><a href="#">Gaming</a></li>
									<li><a href="#">Doanh nhân</a></li>
									<li><a href="#">Đồ hoạ kĩ thuật</a></li>
									<li><a href="#">Sinh viên</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-6">
							<div className="footer">
								<h3 className="footer-title">Thông tin</h3>
								<ul className="footer-links">
									<li><a href="#">Giới thiệu</a></li>
									<li><a href="#">Liên hệ</a></li>
									<li><a href="#">Chính sách bảo mật</a></li>
									<li><a href="#">Đặt hàng và hoàn trả</a></li>
									<li><a href="#">Điều khoản</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-6">
							<div className="footer">
								<h3 className="footer-title">Dịch vụ</h3>
								<ul className="footer-links">
									<li><a href="#">Tài khoản</a></li>
									<li><a href="#">Giỏ hàng</a></li>
									<li><a href="#">Lịch sử đơn hàng</a></li>
									<li><a href="#">Giúp đỡ</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer;