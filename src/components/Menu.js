import { Component } from "react";
import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <div className="content-left">
                <div className="first-content">
                    <span>Dashboard</span>
                </div>
                <div className="second-content">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true"><i className="fa fa-home" aria-hidden="true"></i><span>Trang chủ</span></li>
                        <li class="list-group-item"><i className="fa fa-home" aria-hidden="true"></i><span>Quản lí Camera</span></li>
                        <li class="list-group-item"><i class="fa fa-bell" aria-hidden="true"></i><span>Cảnh báo</span></li>
                        <li class="list-group-item"><i className="fa fa-home" aria-hidden="true"></i><span>Khu vực</span></li>
                        <li class="list-group-item"><i className="fa fa-home" aria-hidden="true"></i><span>Thống kê</span></li>
                        <li class="list-group-item"><i class="fa fa-users" aria-hidden="true"></i><span>Liên hệ</span></li>
                    </ul>
                </div>
                <div className="third-content mt-4">
                    <ul class="list-group">
                        <li class="list-group-item"><i class="fa fa-cog" aria-hidden="true"></i><span>Cài đặt</span></li>
                        <li class="list-group-item"><i class="fa fa-user-plus" aria-hidden="true"></i><span>Đăng kí</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;