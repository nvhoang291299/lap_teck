import { useEffect, useState } from "react";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";
import { getCarts } from "../../service/user/serviceCart";

function CartPage() {
    const [carts, setCarts] = useState();

    const fetchApi =  async () => {
        try {
            const res = await getCarts();
            setCarts(res);
          } catch (error) {
            console.log(error);
          }
    }
    // console.log(carts);
    sessionStorage.setItem('carts', JSON.stringify(carts));


    useEffect(() => {
        fetchApi();
    }, [])

    return(
        <section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
                    <div className="col-md-8 ftco-animate">
                        <CartList carts={carts} />
                    </div>
                    <div className="col-md-4 justify-content-start">
                        <CartTotal carts={carts}/>
                    </div>
    		    </div>
		    </div>
		</section>
    )
}

export default CartPage;