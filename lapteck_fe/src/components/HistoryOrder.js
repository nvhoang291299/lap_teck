import { useEffect, useState } from "react";
import { getHistory } from "../service/user/serviceHistory";

function HistoryOrder() {
    const [orders, setOrder] = useState();

    const fetchData = async () => {
        const res  = await getHistory();
        setOrder(res);
    }

    useEffect(() => {
        fetchData(sessionStorage.getItem('EMAIL'));
    },[])

    console.log(orders);

    return (
        <>
            <div className="border p-4 " style={{ margin: "auto", borderRadius: "10px" }}>
                <div className="text-center mb-4"><h2>Đơn hàng đã mua</h2></div>
                <table className="table table-striped">
                    <thead>
                        <th>STT</th>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Ngày đặt mua</th>
                        <th>Trạng thái đơn hàng</th>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map((order, index) =>(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{order.nameLaptop}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.total}</td>
                                    <td>{order.dateOrder}</td>
                                    <td><span className="badge bg-info text-dark">{order.statusOrder}</span></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HistoryOrder;