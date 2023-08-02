function CarouselProduct() {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">Sản phẩm mới</h3>
                            {/* <div className="section-nav">
                                <ul className="section-tab-nav tab-nav">
                                    <li className="active"><a data-toggle="tab" href="#tab1">Laptop</a></li>
                                    <li><a data-toggle="tab" href="#tab1">Bàn phím</a></li>
                                    <li><a data-toggle="tab" href="#tab1">Chuột</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="products-tabs">
                                <div id="tab1" className="tab-pane active">
                                    <div className="products-slick" data-nav="#slick-nav-1">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product01.png" alt="" />
                                                <div className="product-label">
                                                    <span className="sale">-30%</span>
                                                    <span className="new">NEW</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">Category</p>
                                                <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                                                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                                                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="slick-nav-1" className="products-slick-nav"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CarouselProduct;