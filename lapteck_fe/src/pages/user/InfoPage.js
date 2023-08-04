import HistoryOrder from "../../components/HistoryOrder";
import Infomation from "../../components/Infomation";

function InfoPage() {
    return(
        <> 
            <div className="d-flex align-items-start" style={{height: "40vw"}}>
                <div className="nav flex-column nav-pills col-2 bg-darkhold py-4" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{height: "40vw"}}>
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <i className="fa-regular fa-user me-2"></i>Thông tin tài khoản
                    </button>
                    <button className="nav-link " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <i className="fa-solid fa-file-lines me-2"></i>Lịch sử mua hàng
                    </button>
                    <button className="nav-link " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <i className="fa-solid fa-key me-2"></i>Đổi mật khẩu
                    </button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <i className="fa-regular fa-pen-to-square me-2  "></i>Góp ý - Phản hồi
                    </button>
                </div>
                <div className="tab-content col-10 py-4" id="v-pills-tabContent" style={{height: "40vw"}}>
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <Infomation />
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <HistoryOrder />
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">hello3</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">hello1</div>
                </div>
            </div>
        </>
    )
}

export default InfoPage;