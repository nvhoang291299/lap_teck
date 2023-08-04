function HistoryOrder() {
    return (
        <>
            <div className="border p-4 " style={{ width: "500px", margin: "auto", borderRadius: "10px" }}>
                <div className="text-center mb-4"><h2>Đơn hàng đã mua</h2></div>
                <table className="table table-striped">
                    <thead>
                        <th>STT</th>
                        <th>Sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Ngày đặt mua</th>
                        <th>Trạng thái đơn hàng</th>
                    </thead>
                    <tbody>
                        <tr key="">
                            <td>1</td>
                            <td>Sản phẩm</td>
                            <td>Hình ảnh</td>
                            <td>Số lượng</td>
                            <td>Giá</td>
                            <td>Ngày đặt mua</td>
                            <td>Trạng thái đơn hàng</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HistoryOrder;