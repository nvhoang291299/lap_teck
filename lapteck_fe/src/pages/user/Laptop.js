import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDetail } from '../../service/user/serviceProducts';
import { Link } from "react-router-dom";

function Laptop() {
  let { id } = useParams();
  const [laptop, setLaptop] = useState();

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

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-5 col-md-push-2">
              <div id="product-main-img">
                <div className="product-preview">
                  <img src={laptop?.image} />
                </div>
              </div>
            </div>
            <div className="col-5 col-md-push-2">
              <div className="product-details">
                <h2 className="product-name">{laptop?.nameProduct}</h2>
                <div>
                  <h3 className="product-price">{laptop?.price.toLocaleString("de-DE")}</h3>
                </div>
                <p>{laptop?.design}</p>
                <div className="product-options">
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm giỏ hàng</button>
                </div>
                <ul className="product-links">
                  <li>Thể loại:</li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div id="product-tab">
              <ul className="nav nav-tabs" id="myTab" role="tablist" style={{justifyContent: "center"}}>
                <li className="nav-item " role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Giới thiệu</button>
                </li>
                <li className="nav-item " role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Chi tiết</button>
                </li>
                <li className="nav-item " role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Nhận xét</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  {laptop?.description}
                </div>
                <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <table className="table table-bordered border-secondary table-striped" style={{ width: "500px",margin:"auto" }}>
                    <tbody>
                      <tr>
                        <th>CPU</th>
                        <td>{laptop?.cpu}</td>
                      </tr>
                      <tr>
                        <th>Hệ điều hành</th>
                        <td>{laptop?.oSystem}</td>
                      </tr>
                      <tr>
                        <th>RAM</th>
                        <td>{laptop?.ram}</td>
                      </tr>
                      <tr>
                        <th>Màn hình</th>
                        <td>{laptop?.screen}</td>
                      </tr>
                      <tr>
                        <th>Pin</th>
                        <td>{laptop?.battery}</td>
                      </tr>
                      <tr>
                        <th>Bảo hành</th>
                        <td>{laptop?.warranty}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="row">
                    <div className="col-md-3">
                      <div id="rating">
                        <div className="rating-avg">
                          <span>4.5</span>
                          <div className="rating-stars">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                          </div>
                        </div>
                        <ul className="rating">
                          <li>
                            <div className="rating-stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <div className="rating-progress">
                              <div style={{ width: '80%' }} />
                            </div>
                            <span className="sum">3</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div style={{ width: '60%' }} />
                            </div>
                            <span className="sum">2</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div />
                            </div>
                            <span className="sum">0</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div />
                            </div>
                            <span className="sum">0</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div />
                            </div>
                            <span className="sum">0</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div id="reviews">
                        <ul className="reviews">
                          <li>
                            <div className="review-heading">
                              <h5 className="name">Hoàng</h5>
                              <p className="date">03/08/2023</p>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o empty" />
                              </div>
                            </div>
                            <div className="review-body">
                              <p>Sản phẩm tốt, nhân viên tư vấn nhiệt tình</p>
                            </div>
                          </li>
                          <li>
                            <div className="review-heading">
                              <h5 className="name">Hoàng</h5>
                              <p className="date">03/08/2023</p>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o empty" />
                              </div>
                            </div>
                            <div className="review-body">
                              <p>Sản phẩm tốt, nhân viên tư vấn nhiệt tình</p>
                            </div>
                          </li>
                          <li>
                            <div className="review-heading">
                              <h5 className="name">Hoàng</h5>
                              <p className="date">03/08/2023</p>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o empty" />
                              </div>
                            </div>
                            <div className="review-body">
                              <p>Sản phẩm tốt, nhân viên tư vấn nhiệt tình</p>
                            </div>
                          </li>
                        </ul>
                        <ul className="reviews-pagination">
                          <li className="active">1</li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div id="review-form">
                        <form className="review-form">
                          <input className="input" type="text" placeholder="Your Name" />
                          <input className="input" type="email" placeholder="Your Email" />
                          <textarea className="input" placeholder="Your Review" defaultValue={""} />
                          <div className="input-rating">
                            <span>Your Rating: </span>
                            <div className="stars">
                              <input id="star5" name="rating" defaultValue={5} type="radio" /><label htmlFor="star5" />
                              <input id="star4" name="rating" defaultValue={4} type="radio" /><label htmlFor="star4" />
                              <input id="star3" name="rating" defaultValue={3} type="radio" /><label htmlFor="star3" />
                              <input id="star2" name="rating" defaultValue={2} type="radio" /><label htmlFor="star2" />
                              <input id="star1" name="rating" defaultValue={1} type="radio" /><label htmlFor="star1" />
                            </div>
                          </div>
                          <button className="primary-btn">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
      )
}

export default Laptop;