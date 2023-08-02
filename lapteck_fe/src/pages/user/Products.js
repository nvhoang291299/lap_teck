import AsideCheckbox from "../../components/AsideCheckbox";
import AsideFilter from "../../components/AsideFilter";
import CardProduct from "../../components/CardProduct";
import { useState, useEffect } from "react";
import { getList } from "../../service/user/serviceProducts";
import { ToastContainer } from 'react-toastify';

function Products() {
  const [laptops, setLaptops] = useState();

  const fetchData = async () => {
    try {
      const res = await getList();
      setLaptops(res);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div id="aside" className="col-md-3">
            <AsideCheckbox />
            <AsideFilter />
            <AsideCheckbox />
          </div>
          <div id="store" className="col-md-9">
            <div className="store-filter clearfix">
              <ul className="store-grid">
                <li className="active"><i className="fa fa-th" /></li>
                <li><a href="#"><i className="fa fa-th-list" /></a></li>
              </ul>
            </div>
            <div className="row">
              {
                laptops && laptops.map((laptop, index) => (
                  <CardProduct laptop={laptop} key={index} />
                ))
              }
            </div>
            <div className="store-filter clearfix">
              <ul className="store-pagination">
                <li className="active">1</li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#"><i className="fa fa-angle-right" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> 
    </div>
  )
}

export default Products;