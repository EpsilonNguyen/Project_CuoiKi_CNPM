import { Component } from "react";
import './Alert.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Alert extends Component {
    render() {
        return (
            <div className="alert-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div className="custom-content">
                        <div className="check"><i class="fa fa-check-circle" aria-hidden="true"></i><span>Đánh dấu đã đọc</span></div>
                        <div className="trash"><i class="fa fa-trash" aria-hidden="true"></i><span>Xóa thông báo</span></div>
                        <div className="gear"><i class="fa fa-cog" aria-hidden="true"></i><span>Cài đặt cảnh báo</span></div>
                    </div>
                    <div className="body-content">
                        <div className="first-row pt-3">
                            <div className="first-content">Lịch sử cảnh báo</div>
                            <div className="second-content">
                                <div className="sort"> <i class="fa fa-sort-amount-asc" aria-hidden="true"></i><span>Sort</span></div>
                                <div className="filter"><i class="fa fa-filter" aria-hidden="true"></i><span>Filter</span></div>
                            </div>
                        </div>
                        <div className="second-row mt-5">
                            <div className="first-content">
                                <div><i class="fa fa-square-o" aria-hidden="true"></i></div>
                                <div><span>Nội dung</span></div>
                            </div>
                            <div className="second-content">
                                <div><span>Khu vực</span></div>
                                <div><span>Serial</span></div>
                                <div><span>Mức độ</span></div>
                                <div><span>Playbacks</span></div>
                            </div>
                        </div>
                        <div className="third-row mt-3">
                            <div className="first-content">
                                <div><i class="fa fa-square-o" aria-hidden="true"></i></div>
                                <div><span>Cảnh báo người lạ</span></div>
                            </div>
                            <div className="second-content">
                                <div className="sort"><span>H56213454</span></div>
                                <div className="sort"><span>DEF456-fds789</span></div>
                                <div className="sort"><span>High</span></div>
                                <div className="sort"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Alert;