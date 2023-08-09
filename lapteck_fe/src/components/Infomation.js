import { useState } from "react";
import { getInfo } from "../service/user/serviceInfo";
import { useEffect } from "react";

function Infomation() {
    const [user, setUser] = useState();

    const fetchData = async () => {
        try {
        const res = await getInfo();
        setUser(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return(
        <div className="border p-4 " style={{ width: "500px",margin:"auto", borderRadius:"10px"}}>
            <div className="text-center mb-4"><i className="fa-regular fa-circle-user" style={{fontSize: "50px", color: "red"}}></i></div>
            <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th>Họ và tên</th>
                        <td>{user?.fullName}</td>
                      </tr>
                      <tr>
                        <th>Giới tính</th>
                        <td className="text-secondary">Chưa cập nhật</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{user?.email}</td>
                      </tr>
                      <tr>
                        <th>Số điện thoại</th>
                        <td>{user?.numberPhone}</td>
                      </tr>
                      <tr>
                        <th>Địa chỉ</th>
                        <td className="text-secondary">Chưa câp nhật</td>
                      </tr>
                    </tbody>
                  </table>
        </div>
    )
}

export default Infomation;