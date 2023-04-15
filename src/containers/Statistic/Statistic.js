import { Component } from "react";
import './Statistic.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Statistic extends Component {
    render() {
        return (
            <div className="statistic-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div className="custom-content">
                        <div className="check"><i class="fa fa-check-circle" aria-hidden="true"></i><span>Đánh dấu đã đọc</span></div>
                        <div className="trash"><i class="fa fa-trash" aria-hidden="true"></i><span>Xóa thông báo</span></div>
                    </div>
                    <div className="body-content">
                        <div className="first-row pt-3">
                            <div className="first-content">Thống kê</div>
                            <div className="second-content">
                                <div className="sort"> <i class="fa fa-sort-amount-asc" aria-hidden="true"></i><span>Sort</span></div>
                                <div className="filter"><i class="fa fa-filter" aria-hidden="true"></i><span>Filter</span></div>
                            </div>
                        </div>
                        <div className="second-row mt-5">
                            <div className="first-content">
                                <div><i class="fa fa-square-o" aria-hidden="true"></i></div>
                                <div><span>Profile</span></div>
                            </div>
                            <div className="second-content">
                                <div><span>Khu vực</span></div>
                                <div><span>Serial</span></div>
                                <div><span>Thời gian</span></div>
                            </div>
                        </div>
                        <div className="third-row mt-3">
                            <div className="first-content">
                                <div><i class="fa fa-square-o" aria-hidden="true"></i></div>
                                <div><span>Hưng</span></div>
                            </div>
                            <div className="second-content">
                                <div className="sort"><span>H56213454</span></div>
                                <div className="sort"><span>DEF456-fds789</span></div>
                                <div className="sort"><span>21/2/2023 17:16:15</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistic;