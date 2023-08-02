import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from '../../service/user/serviceProducts';

function Laptop() {
  let { id } = useParams();
  const [laptop, setLaptop] = useState();

  console.log(id);

  const showLaptop = async () => {
    try {
      const res = await getDetail(id)
      setLaptop(res);
    } catch (error) {
      console.log(error);
    }
      }

  useEffect(() => {
    showLaptop();
  }, [id])

  console.log(laptop);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-push-2">
              <div id="product-main-img">
                <div className="product-preview">
                  <img src={laptop.image} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-2  col-md-pull-5">
          <div id="product-imgs">
            <div className="product-preview">
              <img src="./img/product01.png" alt />
            </div>
            <div className="product-preview">
              <img src="./img/product03.png" alt />
            </div>
            <div className="product-preview">
              <img src="./img/product06.png" alt />
            </div>
            <div className="product-preview">
              <img src="./img/product08.png" alt />
            </div>
          </div>
        </div> */}
          <div className="col-md-5">
            <div className="product-details">
              <h2 className="product-name">{laptop.nameProduct}</h2>
              {/* <div>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <a className="review-link" href="#">10 Review(s) | Add your review</a>
            </div> */}
              <div>
                <h3 className="product-price">{laptop.price.toLocaleString("de-DE")}</h3>
                {/* <span className="product-available">In Stock</span> */}
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="product-options">
                {/* <label>
                Size
                <select className="input-select">
                  <option value={0}>X</option>
                </select>
              </label> */}
                {/* <label>
                Color
                <select className="input-select">
                  <option value={0}>Red</option>
                </select>
              </label> */}
              </div>
              <div className="add-to-cart">
                {/* <div className="qty-label">
                  Qty
                  <div className="input-number">
                    <input type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                </div> */}
                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
              </div>
              {/* <ul className="product-btns">
              <li><a href="#"><i className="fa fa-heart-o" /> add to wishlist</a></li>
              <li><a href="#"><i className="fa fa-exchange" /> add to compare</a></li>
            </ul> */}
              <ul className="product-links">
                <li>Category:</li>
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
              {/* <ul className="product-links">
              <li>Share:</li>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-envelope" /></a></li>
            </ul> */}
            </div>
          </div>
          <div className="col-md-12">
            <div id="product-tab">
              <ul className="tab-nav">
                <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                <li><a data-toggle="tab" href="#tab2">Details</a></li>
                <li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Laptop;