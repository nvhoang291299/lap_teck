import AsideCheckbox from "../../components/AsideCheckbox";
import AsideFilter from "../../components/AsideFilter";
import CardProduct from "../../components/CardProduct";
import { useState, useEffect } from "react";
import { getList, getListByNameProduct } from "../../service/user/serviceProducts";
import { ToastContainer } from 'react-toastify';
import ReactPaginate from "react-paginate";
import { NavLink, Link } from "react-router-dom";

function Products() {
  const [laptops, setLaptops] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const pageSize = 10;

  const fetchData = async (page) => {
    try {
      const res = await getList(page, pageSize);
      setLaptops(res.content);
      setTotalPage(res.totalPages);
    } catch (error) {
      console.log(error);
    }

  };

  const fetchSearch = async () => {
    try {
      // let search = sessionStorage.getItem('search');
      // console.log(typeof search);
      const res = await getListByNameProduct();
      console.log(res);
      setLaptops(res)
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickPage(page) {
    fetchData(+page.selected + 1);
  }

  
  useEffect(() => {
    fetchSearch();
  },[])

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div id="aside" className="col-md-3">
            <AsideCheckbox />
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
          </div>
        </div>
        <div className=" d-flex justify-content-center">
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handleClickPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </div>
      </div>
      
      <ToastContainer />
    </div>
  )
}

export default Products;