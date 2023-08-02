import { delCart } from "../service/user/serviceCart";

function CartList(props) {
    const { carts } = props;

    const handleDelete = async (idDel) => {
        try {
            await delCart(idDel);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="cart-list">
                <table className="table">
                    <thead className="thead-primary">
                        <tr className="text-center">
                            <th>&nbsp;</th>
                            <th>Hình ảnh</th>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts && carts.map((cart) => (
                                <tr className="text-center">
                                    <td className="product-remove"><a href="#"><i class="fa-solid fa-xmark" onClick={() => {handleDelete(cart.id)}}></i></a></td>
                                    <td className="image-prod">
                                        <div className="img">
                                            <img src={cart.image} className="img" width="50%" alt="" />
                                        </div>
                                        </td>
                                    <td className="product-name">
                                        <h5>{cart.nameLaptop}</h5>
                                    </td>
                                    <td className="quantity">
                                        <div className="input-group mb-3">
                                            <input type="text" name="quantity" className="quantity form-control input-number" value={cart.quantity} min="1" max="100" />
                                        </div>
                                    </td>
                                    <td className="total">{cart.totalPrice.toLocaleString("de-DE")}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CartList;