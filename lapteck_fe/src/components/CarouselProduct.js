import { useEffect, useState } from "react";
import { getTopProduct } from "../service/user/serviceProducts";
import CardProduct from "./CardProduct";

function CarouselProduct() {
    const [laptops, setLaptops] = useState();

    const fetchData = async () => {
        try {
            const res = await getTopProduct();
            setLaptops(res);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(laptops);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">Sản phẩm mới</h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                laptops && laptops.map((laptop) => (
                                    <CardProduct laptop={laptop} />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CarouselProduct;