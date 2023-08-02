import laptop from '../image/laptop.webp';

function Collections() {
    return (
        <div className="row">
            <div className="col-md-4 col-xs-6">
                <div className="shop">
                    <div className="shop-img">
                        <img src={laptop} alt="" />
                    </div>
                    <div className="shop-body">
                        <h3>Laptop<br />Collection</h3>
                        <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections;